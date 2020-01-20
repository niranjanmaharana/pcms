/**
*  Mediator utility class. Used to implement the observable pattern within controllers.
*/
Ext.define('pcms.util.Mediator', {
    alternateClassName: ['pcms.Mediator',  'Mediator'],
    singleton:  true,

    mixins: [
        'Ext.mixin.Observable'
    ],

    constructor:  function (config) {
        this.mixins.observable.constructor.call(this,  config);
    }
});