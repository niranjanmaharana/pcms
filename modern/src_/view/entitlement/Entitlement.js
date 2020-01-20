Ext.define('pcms.view.entitlement.Entitlement', {
    extend: 'Ext.Panel',
    xtype: 'app-entitlement',

    requires: [
        'pcms.view.entitlement.EntitlementHeader',
        'pcms.view.entitlement.EntitlementController',
        'pcms.view.entitlement.EntitlementModel',
        'pcms.view.entitlement.EntitlementBody',
        'pcms.view.grid.BaseGrid'
    ],

    controller: 'entitlement',
    viewModel: 'entitlement',

    cls: 'entitlement',

    items: [{
        xtype: 'app-entitlementHeader',
    }, {
        xtype: 'titlebar',
        cls: 'search-form',
        items: [{
            xtype: 'formpanel',
            plugins: 'responsive',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            defaults: {
                allowBlank: false,
                submitEmptyText: false,
                flex: 3,
                responsiveConfig: {
                    'width < 800': {
                        width: '50%'
                    },
                    'width >= 800': {
                        width: '100%'
                    }
                },
            },
            items: [{
                xtype: 'searchfield',
                label: 'Groupd ID/Name',
                name: 'searchTerm',
                emptyText: 'Search for Group ID or Name',
                bind: {
                    value: '{searchTerm}'
                }
            }, {
                xtype: 'spacer',
                flex: 1
            }, {
                xtype: 'selectfield',
                name: 'environment',
                label: 'Environment',
                emptyText: 'Environment',
                valueField: 'envId',
                displayField: 'envName',
                bind: {
                    value: '{environment}',
                    store: '{environments}'
                }
            }]
        }]
    }, {
        xtype: 'app-entitlementBody',
        cls: 'entitlement-body'
    }]
});