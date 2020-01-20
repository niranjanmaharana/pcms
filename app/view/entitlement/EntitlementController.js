Ext.define('pcms.view.entitlement.EntitlementController', {
    extend: 'pcms.view.app.AppController',
    alias: 'controller.entitlement',
    
    onRender: function(sender, eOpts) {
        this.getViewModel().set('pageName', 'User Entitlement');
    }
});