Ext.define('pcms.model.Group', {
    extend: 'Ext.data.Model',
    
    idProperty: 'groupId',

    fields: [{
        name: 'groupId',
        type: 'string'
    }, {
        name: 'entitlementId',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'organizations',
        type: 'string'
    }, {
        name: 'providers',
        type: 'string'
    }]
});