/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('pcms.view.titlebar.TitlebarModel', {
    extend: 'pcms.view.app.AppModel',

    alias: 'viewmodel.titlebar',

    data: {
        groupId: '',
        pageName: '',
        title: 'Population',
        menuCollapsed: true
    }
});