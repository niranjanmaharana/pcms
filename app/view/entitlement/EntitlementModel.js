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
            data: [{
                'envId': 'dev',
                'envName': 'DEV'
            }, {
                'envId': 'sit',
                'envName': 'SIT'
            }, {
                'envId': 'uat',
                'envName': 'UAT'
            }]
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
            data: [{
                'groupId': 'G101',
                'entitlementId': 'INC0101',
                'name': 'Group A',
                'organizations': '',
                'providers': 'ABC'
            }, {
                'groupId': 'G102',
                'entitlementId': 'INC0102',
                'name': 'Group A',
                'organizations': '',
                'providers': 'ABC'
            }, {
                'groupId': 'G103',
                'entitlementId': 'INC0102',
                'name': 'Group A',
                'organizations': '',
                'providers': 'ABC'
            }, {
                'groupId': 'G104',
                'entitlementId': 'INC0104',
                'name': 'Group A',
                'organizations': '',
                'providers': 'ABC'
            }],
            autoLoad: true,
            pageSize: 3,
            // proxy: {
            //     type: 'pcms-proxy',
            //     extraParams: {
            //         cmd: 'getDownloads'
            //     }
            // },
            // listeners: {
            //     beforeLoad: 'beforeGroupsLoad'
            // }
        }
    }
});