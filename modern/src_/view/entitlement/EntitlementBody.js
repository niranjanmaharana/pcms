Ext.define('pcms.view.entitlement.EntitlementBody', {
    extend: 'pcms.view.grid.BaseGrid',
    xtype: 'app-entitlementBody',

    width: '100%',
    minHeight: 300,

    layout: {
        type: 'fit'
    },

    bind: {
        store: '{groups}'
    },

    columns: [{
        text: 'GROUP ID',
        dataIndex: 'groupId',
        flex: 1
    }, {
        text: 'ENTITLEMENT ID',
        dataIndex: 'entitlementId',
        flex: 1
    }, {
        text: 'NAME',
        dataIndex: 'name',
        flex: 1
    }]
});