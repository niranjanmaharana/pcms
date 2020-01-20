Ext.define('pcms.view.main.Footer', {
    extend: 'Ext.Panel',
    xtype: 'app-footer',

    requires: [],

    /**
     *  Layout
     *  @cfg
     */
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    docked: 'bottom',
    cls: 'footerCls',

    /**
     *  Items array - holds the logo, group name, and branding logo.
     *  @cfg
     */
    items: [{
        xtype: 'label',
        bind : {
            html: 'Build: {buildDate}'
        },
        cls: 'footerText'
    }, {
        xtype: 'spacer',
        cls: 'footerText'
    }, {
        xtype: 'label',
        bind : {
            html: 'Copyright <i class="fa fa-copyright"></i> {copyrightYear}'
        },
        cls: 'footerText'
    }]
});