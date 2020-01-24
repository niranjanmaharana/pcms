Ext.define('pcms.view.main.Titlebar', {
    name: 'titlebar',
    extend: 'Ext.Panel',
    xtype: 'app-titlebar',

    viewModel: 'main',
    cls: 'titlebar',
    layout: 'hbox',
    items: [{
        xtype: 'button',
        iconCls: 'x-fa fa-bars',
        hidden: true,
        cls: 'header-buttons',
        handler: 'onMenuToggle'
    }, {
        xtype: 'spacer',
        width: 10
    }, {
        xtype: 'label',
        cls: 'title',
        bind: {
            html: '{title}'
        }
    }, {
        xtype: 'spacer'
    }]
});