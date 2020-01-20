Ext.define('pcms.view.main.Header', {
    extend: 'Ext.Panel',
    xtype: 'app-header',

    requires: [],

    /**
     *  Turn off the header and set the height
     */
    header: true,
    height: 70,

    /**
     *  Title for ARIA compliance
     *  @cfg
     */
    title: 'PCMS Application Header',

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
        id: 'app-logo',
        width: 52, // The image is 40px wide + 6px padding on each side.
        html: '<span class="pcmsIcons icon-pcms-threed"></span>'
    }, {
        xtype: 'container',
        id: 'app-titles',
        flex: 1,
        layout: 'vbox',
        items: [{
            xtype: 'container',
            height: 22,
            html: '<span class="pcmsIcons icon-pcms-PCMS"></span>',
            /**
             *	@cfg {Number} [minWidth]
             *	I've noticed instances where the font is truncated, I'm hoping that setting a minWidth helps.
             */
            minWidth: 300
        }, {
            xtype: 'container',
            id: 'app-org-name',
            flex: 1,
            bind: {
                html: 'Dummy Group'
            }
        }]
    }, {
        xtype: 'container',
        items: [{
            xtype: 'image',
            bind: {
                src: 'resources/images/logos/BCBSWNY_WesternNewYork_blue_black_horz.png'
            },
            alt: 'Brand logo',
            id: 'brand-logo'
        }]
    }]
});