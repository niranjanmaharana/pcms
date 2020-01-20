/**
 *	Proxy configuration for generic AJAX requests.
 */
Ext.define('pcms.data.proxy.Ajax', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.ajax-proxy',

    requires: [
        'pcms.util.Configuration'
    ],

    config: {
        /**
         *  @cfg {Boolean} [forceEncoding=false]
         *  For most instances of the proxy class we want to bypass encoding so we've overriden the applyEncoding
         *	function. But, for some instances of the class we still want the values to be encoded.  In those case set
         *	forceEncoding = true.
         */
        forceEncoding: false
    },

    /**
     *  @cfg
     */
    type: 'ajax',

    /**
     *  True to wrap the request params in a json
     */
    paramsAsJson: true,

    /**
     *	@cfg {Object} actionMethods
     *	Mapping of action name to HTTP request method.  By default all are POST methods.
     */
    actionMethods: {
        create: 'POST',
        read: 'POST',
        update: 'POST',
        destroy: 'POST'
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
        /**
         *	@cfg {Boolean} [encode=false] Configure 'true' to send record data (all record fields if
         *	{@link #writeAllFields} is 'true') as a JSON encoded HTTP parameter named by the {@link #rootProperty}
         *	configuration.
         *
         *	I don't want to encode the values because I want the requests to be as similar to the existing code base
         *	as possible and those requests don't encode the values. - Brent Mahoney, Tuesday, November 1, 2016
         */
        encode: false,
        rootProperty: 'data',
        /**
         *  @cfg {Boolean} [writeAllFields=true]
         *  'true' to write all fields from the record to the server. 'false' will only send the fields that were
         *	modified.
         */
        writeAllFields: true
    },

    /**
     *	The applyEncoding override unravels any nested objects.  I'm allowing the ability to continue to use the
     *	proxy class even if you need to apply encoding.  In that event then have your proxy configured with
     *	forceEncoding = true.
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
    constructor: function() {
        Ext.apply(this, {
            url: Configuration.getApiUrl(),
            timeout: Configuration.getTimeout()
        });

        this.callParent(arguments);
    }
});
