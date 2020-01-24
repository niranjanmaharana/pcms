Ext.define('pcms.view.entitlement.EntitlementModel', {
    extend: 'pcms.view.app.AppModel',
    alias: 'viewmodel.entitlement',

    data: {
        title: 'Entitlement Page',
        searchTerm: 'INC000',
        environment: 'sit'
    },

    stores: {
        'environments': {
            fields: [{
                name: 'envId',
                type: 'string'
            }, {
                name: 'envName',
                type: 'string'
            }],
            autoLoad: true,
            pageSize: 3,
            proxy: {
                type: 'rest-proxy',
                noCache: false,
                url: '../../resources/JSON/environments.json',
                timeout: 60 * 1000,
                extraParams: ''
            },
            listeners: {
                //beforeLoad: 'beforeGroupsLoad'
            }
        },
        'groups': {
            fields: [{
                name: 'groupId',
                type: 'string'
            }, {
                name: 'entitlementId',
                type: 'string'
            }, {
                name: 'name',
                type: 'string'
            }, {
                name: 'organizations',
                type: 'string'
            }, {
                name: 'providers',
                type: 'string'
            }],
            autoLoad: true,
            pageSize: 3,
            proxy: {
                type: 'rest-proxy',
                noCache: false,
                url: '../../resources/JSON/groups.json',
                timeout: 60 * 1000,
                extraParams: ''
            },
            listeners: {
                //beforeLoad: 'beforeGroupsLoad'
            }
        }
    }
});