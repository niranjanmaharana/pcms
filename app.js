/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'pcms.Application',

    name: 'pcms',

    requires: [
        // This will automatically load all classes in the pcms namespace
        // so that application classes do not need to require each other.
        'pcms.*'
    ],

    // The name of the initial view to create.
    // mainView: 'pcms.view.login.Login'
});
