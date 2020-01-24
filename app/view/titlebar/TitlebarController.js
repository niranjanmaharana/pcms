/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('pcms.view.titlebar.TitlebarController', {
    extend: 'pcms.view.app.AppController',

    alias: 'controller.main',

    onMenuToggle: function(comp) {
        debugger;
        var me = this,
            panel = me.lookupReference('ref-Navigation'),
            viewModel = me.getViewModel(),
            menuCollapsed = viewModel.get('menuCollapsed');

        if (menuCollapsed) {
            panel.show();
        } else {
            panel.hide();
        }
        viewModel.set('menuCollapsed', !menuCollapsed);
    }
});