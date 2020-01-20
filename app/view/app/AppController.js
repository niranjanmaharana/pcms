/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('pcms.view.app.AppController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.app',
    
	mixins: [
		'pcms.mixin.Mediator'
	]
});
