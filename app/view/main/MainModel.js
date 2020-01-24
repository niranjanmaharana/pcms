/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('pcms.view.main.MainModel', {
    extend: 'pcms.view.app.AppModel',

    alias: 'viewmodel.main',

    data: {
        groupId: '',
        pageName: '',
        title: 'Population'
    }
});