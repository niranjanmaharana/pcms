Ext.define('pcms.util.Configuration', {
    alternateClassName: ['pcms.Configuration', 'Configuration'],
    singleton: true,

    setConfig: function (config) {
        this.config = config;
    },
    /**
     *	Returns the api url of the application's api service. This isn't in the MainModel because
     *	the login package needs the information and the MainModel hasn't been instantiated or the value doesn't need
     *	to be leveraged in binding.
     *
     *	@return {String} The api url.
     */
    getApiUrl: function () {
        var apiUrl = Ext.manifest.apiUrl;
        return Ext.isEmpty(apiUrl) ? '' : apiUrl;
    },

    /**
     *	Returns the timeout configuration from the configuration response.  This isn't in the MainModel because
     *	the login package needs the information and the MainModel hasn't been instantiated or the value doesn't need
     *	to be leveraged in binding.
     *
     *	@return {String} The application default request timeout.
     */
    getTimeout: function () {
        var timeout = this.config.timeout;
        return Ext.isEmpty(timeout) ? 90000 : timeout;
    },

    /**
     *	Returns the a configuration for the standard toast messaging window.
     *
     *	@return {Object} The global toast configuration.
     */
    getToastConfig: function () {
        return {
            align: 'br',
            autoCloseDelay: 5000,
            closable: true,
            width: 300
        };
    },

    isComponentDisabled: function (compId) {
        var cmp = this.config.cmpConfig[compId];
        return (cmp && cmp.state ? cmp.state.search(/disabled/) !== -1 : false);
    },

    isComponentHidden: function (compId) {
        var cmp = this.config.cmpConfig[compId];
        return (cmp && cmp.state ? cmp.state.search(/hidden/) !== -1 : false);
    },

    isComponentHtml: function (compId) {
        var cmp = this.config.cmpConfig[compId];
        return (cmp && cmp.state ? cmp.state.search(/html/) !== -1 : false);
    },

    getComponentConfig: function (compId) {
        return this.config.cmpConfig[compId];
    },

    getUserRoles: function () {
        return this.config.roles;
    },

    hasUserRole: function (value) {
        return !Ext.isEmpty(this.getUserRoles()) ? Ext.Array.contains(this.getUserRoles(), value) : false;
    }
}); 