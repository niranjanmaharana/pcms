Ext.define('pcms.view.entitlement.Entitlement', {
    extend: 'Ext.Panel',
    xtype: 'app-entitlement',

    requires: [
        'pcms.view.main.Header',
        'pcms.view.entitlement.EntitlementController',
        'pcms.view.entitlement.EntitlementModel',
        'pcms.view.entitlement.EntitlementBody',
        'pcms.view.baseComponents.BaseCombo',
        'pcms.view.baseComponents.BaseGrid'
    ],

    controller: 'entitlement',
    viewModel: 'entitlement',

    cls: 'entitlement',

    items: [{
        xtype: 'app-header',
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
                xtype: 'textfield',
                label: 'Groupd ID/Name',
                reference: 'ref-groupSearchField',
                flex: 2,
                autoComplete: false,
                listeners: {
                    change: 'onTextChange'
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
    }, {
        xtype: 'app-footer'
    }]
});