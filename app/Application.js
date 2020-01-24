/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('pcms.Application', {
	extend: 'Ext.app.Application',
	name: 'pcms',

	viewModel: 'app',

	requires: [
		'pcms.mixin.Mediator'
	],

	mixins: [
		'pcms.mixin.Mediator'
	],

	/**
	 *  @cfg {Object} [subscribe]
	 *	A config object containing one or more event handlers to be added to this object for subscribing to Mediator
	 *	events.  Used primarily to communicate between controllers.
	 */
	subscribe: {
		// 'aftermonitoringping': 'updateToken',
		// 'logout': 'onLogout',
		'loginsuccess': 'onLogin',
		'groupselect': 'onGroupSelected',
		'togglemenu': 'onMenuToggle'
	},

	quickTips: false,
	platformConfig: {
		desktop: {
			quickTips: true
		}
	},
	config: {
		/**
		 *  @cfg {Ext.container.Container} [viewport]
		 *  The application's current viewport.
		 */
		viewport: null,
		loggedIn: false
	},

	/**
	 * A template method that is called when your application boots.It is called before the application 's launch 
	 * function is executed so gives a hook point to run any code before your Viewport is created.We use it to add 
	 * a load mask while the configurations are "fetched".
	 * @param {Ext.app.Application}[app] The application.
	 */
	init: function() {
		Ext.Viewport.setMasked({
			xtype: 'loadmask',
			fullscreen: true,
			message: 'Application Loading...'
		});
	},

	/**
	 *	The applications's initial view is provided based on the need for a login page.
	 *
	 *	@param {String} profile The detected application profile
	 *	@return {Boolean} By default, the Application will dispatch to the configured startup controller and
	 *	action immediately after running the launch function. Return false to prevent this behavior.
	 */
	launch: function() {
		var me = this,
			token = window.sessionStorage.getItem('jwt');

		Ext.defer(function() {
			me.setViewport('pcms-login');

			// If there is a token stored for the session then check it's validity state.
			if (!Ext.isEmpty(token)) {
				Ext.Viewport.setMasked({
					xtype: 'loadmask',
					fullscreen: true,
					message: 'Authenticating...'
				});
				me.setViewport('app-entitlement');
				me.getViewport().getViewModel().set('pageName', 'User Entitlement');
			}
		}, 500);
	},

	/**
	 *	Remove the application loading mask.
	 */
	unmask: function() {
		Ext.defer(function() {
			Ext.Viewport.setMasked(false);
		}, 500);
	},

	onLogin: function(view, response, action) {
		var me = this,
			token = Ext.JSON.decode(response.responseText).token;
		if (!Ext.isEmpty(token)) {
			me.updateToken(token);
		}
		me.getViewport().destroy();
		window.sessionStorage.setItem('jwt', response);
		me.setViewport('app-entitlement');
	},

	/**
	 *	Whenever the "viewport" changes we need to either start or stop the Activity Monitor.
	 *	
	 *	@param {Ext.Component} [newView] The new "viewport".
	 *	@param {Ext.Component} [oldView] The old "viewport".
	 */
	updateViewport: function(newView /*, oldView*/ ) {
		var me = this;
		if (newView.isXType('app-main')) {
			me.getViewport().getViewModel().set('menuBarHidden', false);
		} else {
			me.getViewport().getViewModel().set('menuBarHidden', true);
		}
	},

	/**
	 *	Whenever the `viewport` config is changed we create an object based on the `xtype`.
	 *	
	 *	@param {String} [xtype] The `xtype` for the current "viewport".
	 *	@return {Ext.Component} The current "viewport".
	 */
	applyViewport: function(xtype) {
		Ext.Viewport.removeAll(true, true);

		return Ext.Viewport.add({
			xtype: xtype
		});
	},

	onAppUpdate: function() {
		Ext.Msg.show({
			title: 'Application Update',
			message: 'The application has an update and needs to reload.',
			buttons: Ext.Msg.OK,
			closable: false,
			icon: Ext.Msg.INFO,
			width: 350,
			fn: function() {
				window.location.reload();
			}
		});
	},

	onGroupSelected: function(groupId) {
		var me = this;
		// Destroy the login view.
		me.getViewport().destroy();
		//Swap viewport now
		me.setViewport('app-main');
		me.getViewport().getViewModel().set('pageName', groupId);
	},

	/**
	 *	Update the TokenStorage class with the updated JWT.
	 *
	 *	@param {String/JSON} [token] JSON Web Token
	 */
	updateToken: function(token) {
		var me = this;

		if (Ext.isSimpleObject(token)) {
			token = token.token;
		}

		if (Ext.isString(token)) {
			// Add the token to the TokenStorage class.
			TokenStorage.setToken(token);

			// Add the response data to the Configuration class.
			// Configuration.config.user = TokenStorage.decode();

			// Update the token for outgoing requests.
			me.setDefaultHeaders();
		} else {
			me.handleFailure();
		}
	},

	/**
	 *	Set the authorization token on all Ext.Ajax request headers..
	 */
	setDefaultHeaders: function() {
		Ext.Ajax.setDefaultHeaders({
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + TokenStorage.getToken(),
			'Content-Type': 'application/json'
		});
	},

	/**
	 *	If we are unable to load configuration properties then redirect to the error page.
	 */
	handleFailure: function() {
		window.location.href = 'error.html';
	},

	onMenuToggle: function() {
		var me = this,
		viewModel = me.getViewport().getViewModel();
		viewModel.set('menuCollasped', !viewModel.get('menuCollasped'));
		console.log('menuCollasped : ', viewModel.get('menuCollasped'));
	}
});