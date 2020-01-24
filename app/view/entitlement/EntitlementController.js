Ext.define('pcms.view.entitlement.EntitlementController', {
    extend: 'pcms.view.app.AppController',
    alias: 'controller.entitlement',

    onTextChange: function(comp, value) {
        if (value.length > 2) {
            var me = this;
            me.getViewModel().getStore('groups').load();
        }
    },

    onGroupSelect: function(grid, context) {
        var me = this;
        me.publish('groupselect', context.record.get('groupId'));
    }
});