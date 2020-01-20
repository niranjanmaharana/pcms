Ext.define('pcms.view.login.LoginForm', {
	extend: 'Ext.form.Panel',
	xtype: 'pcms-loginform',

	requires: [
		// 'Ext.button.Button',
		// 'Ext.container.Container',
		// 'Ext.form.field.Checkbox',
		// 'Ext.form.field.Text',
		// 'Ext.toolbar.Toolbar',
		// 'Ext.form.field.Text'
	],

	/**
	 *	@cfg {String} componentCls
	 *	CSS Class to be added to a components root level element to give distinction to it via styling.
	 */
	componentCls: 'aciisst-loginform',

	/**
	 *	@cfg {String} [defaultFocus]
	 *	Specifies a child Component to receive focus when this Container's {@link #method-focus}
	 *	method is called. Should be a valid {@link Ext.ComponentQuery query} selector.
	 */
	defaultFocus: 'textfield:focusable:not([hidden]):not([disabled]):not([value])',

	/**
	 *	@cfg {Boolean} jsonSubmit
	 *	If set to true, the field values are sent as JSON in the request body.
	 *	All of the field values, plus any additional params configured via {@link #baseParams}
	 *	and/or the `options` to {@link #submit}, will be included in the values POSTed in the body of the request.
	 */
	jsonSubmit: true,

	/**
	 *	Common configurations that shouldn't need "explanation".
	 */
	ui: 'panel-light',
	title: 'Login to your account',
	bodyPadding: '5 20',
	closable: true,
	closeAction: 'hide',
	closeToolText: 'Close',
	floating: true,
	modal: true,
	width: 400,

	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	defaults: {
		xtype: 'textfield',
		allowBlank: false,
		disabled: true,
		labelAlign: 'top',
		labelSeparator: '',
		bind: {
			disabled: '{isAppDisabled}'
		}
	},

	items: [{
		reference: 'userName',
		emptyText: 'Username',
		fieldLabel: 'Username',
		minLength: 1,
		name: 'username',
		triggers: {
			glyphed: {
				cls: 'trigger-glyph-noop login-user-trigger'
			}
		},
		listeners: {
			afterrender: {
				fn: 'setState',
				delay: 25
			},
			specialkey: 'onEnterKey'
		}
	}, {
		reference: 'password',
		emptyText: 'Password',
		fieldLabel: 'Password',
		inputType: 'password',
		minLength: 6,
		name: 'password',
		triggers: {
			glyphed: {
				cls: 'trigger-glyph-noop login-password-trigger'
			}
		},
		listeners: {
			specialkey: 'onEnterKey'
		}
	}, {
		xtype: 'checkbox',
		reference: 'saveUserName',
		boxLabel: 'Remember me',
		checked: false,
		hideLabel: true
	}],
	/**
	 *  @config {Object[]} [dockedItems]
	 *  I'm creating a custom container to hold the authentication error response because the statusbar doesn't Handle
	 *	row-wrapping in the manner I desire.
	 */
	dockedItems: [{
		xtype: 'container',
		cls: 'auth-error-msg',
		dock: 'bottom',
		hidden: true,
		bind: {
			hidden: '{!showAuthMsg}',
			html: '<div class="error-msg-text">{authMsg}</div>'
		}
	}, {
		xtype: 'toolbar',
		dock: 'bottom',
		style: 'background-color: #ffffff;',
		padding: '0 10 20 20',
		layout: 'fit',
		items: [{
			xtype: 'button',
			ui: 'btn-primary',
			disabled: true,
			formBind: true,
			padding: 10,
			text: 'Sign in',
			listeners: {
				click: 'doLogin'
			},
			/**
			 *	I'm providing an override to #setDisabled because I don't want the button to be enabled when the
			 *	username and password fields are disabled.  Due to formBinding the button will be enabled otherwise.
			 *
			 *	@author Brent Mahoney
			 *	@param {Boolean} disabled "true" to disable.
			 *	@return {Boolean} The disabled state of the button.
			 */
			setDisabled: function(disabled) {
				if (!disabled && this.lookupViewModel().get('isAppDisabled')) {
					disabled = true;
				}

				return this[disabled ? 'disable' : 'enable']();
			}
		}]
	}],

	listeners: {
		actioncomplete: 'removeMask',
		actionfailed: 'removeMask',
		show: {
			fn: 'setFocus',
			delay: 50,
			scope: 'this'
		}
	},

	/**
	 *	A helper function that sets the focus on the first invalid field.
	 */
	setFocus: function() {
		var field = this.getDefaultFocus();

		if (!Ext.isEmpty(field)) {
			field.focus(true);
		}
	}
});
