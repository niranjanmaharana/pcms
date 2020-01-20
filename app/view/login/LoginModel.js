Ext.define('pcms.view.login.LoginModel', {
	extend: 'pcms.view.app.AppModel',
	alias: 'viewmodel.pcms-login',

	data: {
		/**
		 *  @cfg {String} [authMsg]
		 *  The status bar message to use for a failed login attempt.
		 */
		authMsg: undefined
	},

	// formulas: {
	// 	/**
	// 	 *  @formula {Boolean} [isAppDisabled]
	// 	 *  Return "true" to indicate the app is unavailable.
	// 	 */
	// 	isAppDisabled: function() {
	// 		var appStatusMsg = Configuration.config.appStatusMsg;

	// 		return !Ext.isEmpty(appStatusMsg);
	// 	},

	// 	/**
	// 	 *  @cfg {Boolean} [showAuthMsg]
	// 	 *  Return "true" to show the login form status bar message.
	// 	 */
	// 	showAuthMsg: {
	// 		bind: {
	// 			bindTo: '{authMsg}'
	// 		},
	// 		get: function(msg) {
	// 			return !Ext.isEmpty(msg);
	// 		}
	// 	}
	// }
});
