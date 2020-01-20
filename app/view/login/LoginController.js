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
			// form.submit();
			debugger;
			me.publish('loginsuccess', null, null, null);
		} else {
			// form.setFocus();
		}
	}
});