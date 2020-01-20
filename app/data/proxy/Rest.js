/**
 *	Proxy configuration for generic REST requests.
 */
Ext.define('pcms.data.proxy.Rest', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.rest-proxy',

    requires: [
        'pcms.util.Configuration'
    ],

    /**
     *  @cfg
     */
    type: 'rest',

    config: {
        /**
         *  @cfg {Boolean} [forceEncoding=false]
         *  For most instances of the proxy class we want to bypass encoding so we've overriden the applyEncoding function. But,
         *	for some instances of the class we still want the values to be encoded.  In those case set forceEncoding = true.
         */
        forceEncoding: false
    },

    /**
     *  True to wrap the request params in a json
     */
    paramsAsJson: true,

    /**
     *	@cfg {Object} actionMethods
     *	Mapping of action name to HTTP request method.
     */
    actionMethods: {
        create: 'POST',
        read: 'GET',
        update: 'PUT',
        destroy: 'DELETE'
    },

    /**
     *  Reader configuration
     *  @cfg
     */
    reader: {
        type: 'json',
        messageProperty: 'message',
        rootProperty: 'data',
        totalProperty: 'total'
    },

    /**
     *  Writer configuration
     *  @cfg
     */
    writer: {
        type: 'json',
        writeAllFields: true,
        writeRecordId: true
    },

    /**
     *	The applyEncoding override unravels any nested objects.  I'm allowing the ability to continue to use the proxy class
     *	even if you need to apply encoding.  In that event then have your proxy configured with forceEncoding = true.
     *
     *	@param {Array} value An array of sorters/filters.
     *	@return {Object} The encoded value
     */
    applyEncoding: function(value) {
        if (this.forceEncoding === true) {
            return Ext.encode(value);
        }

        return value;
    },

    /**
     *	Sets the URL and timeout based upon those found in the Configuration singleton.
     */
    constructor: function(config) {
        /**
         *	If the proxy is configured on a model then there is no binding so the string comes through vs. the result
         *	of binding to {apiUrl}.
         *
         *	@author Brent Mahoney
         *	@date Wednesday, October 10, 2018
         */
        if (!Ext.isEmpty(config.url)) {
            config.url = config.url.replace(/{apiUrl}/, Configuration.getApiUrl());
        }

        Ext.apply(this, {
            url: Configuration.getApiUrl()
            // timeout: Configuration.getTimeout()
        });

        this.callParent(arguments);
    },

    /**
     *	If the request is aborted because a new request is issued (vs. timing out) then we want to ignore the error
     *	message.
     *	
     *	@author Brent Mahoney
     *	@date Thursday, August 2, 2018
     *	@defect https://jira.anthem.com/browse/HCAR-11652
     *	@param {Ext.data.proxy.Proxy} [proxy] The proxy.
     *	@param {Ext.data.Response} [response] The response that was received.
     *	@param {Ext.data.operation.Operation} [operation] The operation that triggered the request.
     */
    onException: function(proxy, response /*, operation*/ ) {
        if (response.aborted === true && response.timedout !== true) {
            return;
        }

        Ext.Msg.alert('Error', 'Oops! Looks like there is something wrong. We are looking into it. Please continue to use rest of the application');
    }
});
