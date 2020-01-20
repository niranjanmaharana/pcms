/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('pcms.Application', {
	extend: 'Ext.app.Application',

	name: 'pcms',

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
		'loginsuccess': 'onLogin'
		// 'logout': 'onLogout'
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
		viewport: null
	},

	/**
	 * A template method that is called when your application boots.It is called before the application 's launch 
	 * function is executed so gives a hook point to run any code before your Viewport is created.We use it to add 
	 * a load mask while the configurations are "fetched".
	 * @param {Ext.app.Application}[app] The application.
	 */
	init: function () {
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
	launch: function () {
		var me = this;
		Ext.defer(function () {
			me.setViewport('pcms-login');
		}, 500);
		// me.unmask();
	},

	/**
	 *	Remove the application loading mask.
	 */
	unmask: function () {
		Ext.defer(function () {
			Ext.Viewport.setMasked(false);
		}, 500);
	},

	onLogin: function (view, response, action) {
		var me = this;
		// Destroy the login view.
		me.getViewport().destroy();

		//Swap viewport now
		me.setViewport('app-entitlement');
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

	onAppUpdate: function () {
		Ext.Msg.show({
			title: 'Application Update',
			message: 'The application has an update and needs to reload.',
			buttons: Ext.Msg.OK,
			closable: false,
			icon: Ext.Msg.INFO,
			width: 350,
			fn: function () {
				window.location.reload();
			}
		});
	}
});
