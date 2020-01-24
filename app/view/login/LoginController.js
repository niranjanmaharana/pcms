Ext.define('pcms.view.login.LoginController', {
	extend: 'pcms.view.app.AppController',
	alias: 'controller.pcms-login',

	requires: [
		'Ext.util.Format',
		'Ext.XTemplate'
	],

	config: {
		/**
		 *  @config {XTemplate} [errorTpl]
		 *  An optional color configuration for the progress bar's background color.
		 */
		errorTpl: new Ext.XTemplate('<span data-qtip="{message}">{message:ellipsis(200, true)}</span>')
	},

	/**
	 *  @event change
	 *  I've noticed that when the browser autofills the field values then the label placement may become
	 *  out-of-sync and needs to be manually synced.
	 *
	 *  @param {Ext.field.Field} [field] The field.
	 *  @param {String} [newValue] The new value.
	 *  @param {String} [oldValue] The original value.
	 */
	onFieldChange: function(field /*, newValue, oldValue*/ ) {
		if (!field.hasFocus) {
			field.syncLabelPlaceholder(true);
		}
	},

	/**
	 *	If the form is valid then go ahead and submit it, otherwise focus on the first invalid field.
	 */
	doLogin: function() {
		var me = this,
			form = me.lookupReference('ref-loginform');

		if (form.validate()) {
			me.getView().mask('Logging in...');

			Ext.Ajax.request({
				url: Configuration.getLoginUrl(),
				method: "GET",
				jsonData: form.getValues(),
				success: function(response, action) {
					form.unmask();
					// Notify Application.js that a successful login has happened.
					me.publish('loginsuccess', me.getView(), response, action);
				},
				failure: function(error, action) {
					form.unmask();
					var responseJson = Ext.decode(error.responseText);
					Ext.toast(responseJson.message, 3000);
				}
			});
		} else {
			// form.setFocus();
		}
	}
});