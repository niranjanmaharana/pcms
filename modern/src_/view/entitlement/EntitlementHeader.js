Ext.define('pcms.view.entitlement.EntitlementHeader', {
    extend: 'Ext.Panel',
    xtype: 'app-entitlementHeader',

    requires: [],

    docked: 'top',

    /**
     *  Layout
     *  @cfg
     */
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    /**
     *  Items array - holds the logo, group name, and branding logo.
     *  @cfg
     */
    items: [{
        xtype: 'container',
        cls: 'entitlement-header',
        padding: '10px 10px',
        width: '100%',
        layout: {
            type: 'hbox'
        },
        items: [{
            xtype: 'img',
            src: 'resources/images/app-logo.png',
            alt: 'Brand logo',
            width: 50,
            height: 50
        }, {
            xtype: 'container',
            cls: 'header-title',
            layout: 'vbox',
            items: [{
                xtype: 'container',
                html: '<span class="pcmsIcons icon-pcms-PCMS"></span>'
            }, {
                xtype: 'label',
                html: 'User Entitlement'
            }]
        }]
    }]
});