/**
 *	Login Container
 */
Ext.define('pcms.view.login.Login', {
	extend: 'Ext.Container',
	xtype: 'pcms-login',

	reference: 'ref-loginpage',

	requires: [
		'Ext.Panel',
		'Ext.Dialog',
		'pcms.view.main.Header',
		'pcms.view.main.Footer'
	],

	/**
	 *  @cfg {String} [plugins]
	 *  Due to the use of the login package and our commenting out of the application's mainView configuration we need
	 *	to configure the main view with the viewport plugin.
	 */
	// plugins: [{
	// 	ptype: 'viewport'
	// }],

	/**
	 *	@cfg {String/Object/Ext.app.ViewController} controller
	 *	A string alias, a configuration object or an instance of a `ViewController` for this container.
	 */
	controller: 'pcms-login',

	/**
	 *	@cfg {String/Object/Ext.app.ViewModel} viewModel
	 *	The `ViewModel` is a data provider for this component and its children.
	 */
	viewModel: {
		type: 'pcms-login'
	},

	/**
	 *	@cfg {String} componentCls
	 *	CSS Class to be added to a components root level element to give distinction to it via styling.
	 */
	// componentCls: 'pcms-login',

	/**
	 *  The main layout is border with the north section establishing the logos and the center the main
	 *  content of the application.
	 *  @cfg
	 */
	layout: {
		type: 'fit'
	},

	items: [{
		xtype: 'app-header'
	}, {
		xtype: 'formpanel',
		reference: 'ref-loginform',
		cls: 'login-panel',
		title: 'Please sign in',
		padding: '3px 15px',
		layout: {
			type: 'vbox',
			align: 'stretch'
		},
		items: [{
			xtype: 'textfield',
			label: 'Username',
			required: true,
			value: 'AG15935',
			listeners: {
				change: 'onFieldChange'
	        }
		}, {
			xtype: 'passwordfield',
			label: 'Password',
			value: 'abcdefghi',
			revealable: true,
			required: true,
			listeners: {
				change: 'onFieldChange'
	        }
		}, {
			xtype: 'button',
			cls: 'login-button',
			text: 'Login',
			listeners: {
				tap: 'doLogin'
			}
		}]
	}, {
		xtype: 'app-footer'
	}]
});
