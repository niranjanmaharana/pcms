Ext.define('pcms.view.main.Header', {
    extend: 'Ext.Panel',
    xtype: 'app-header',

    requires: [],

    /**
     *  Layout
     *  @cfg
     */
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    docked: 'top',
    cls: 'headerCls',

    /**
     *  Items array - holds the logo, group name, and branding logo.
     *  @cfg
     */
    items: [{
        xtype: 'container',
        cls: 'header',
        padding: '10px 10px',
        width: '100%',
        layout: {
            type: 'hbox'
        },
        items: [{
            xtype: 'img',
            src: 'resources/images/app-logo.png',
            alt: 'Brand logo',
            width: 33,
            height: 36,
            margin: '5px 0px 5px 10px'
        }, {
            xtype: 'container',
            cls: 'header-title',
            layout: 'vbox',
            items: [{
                xtype: 'container',
                html: '<span class="pcmsIcons icon-pcms-PCMS"></span>'
            }, {
                xtype: 'label',
                bind: {
                    html: '{pageName}'
                },
                cls: 'subTitle'
            }]
        }]
    }]
});