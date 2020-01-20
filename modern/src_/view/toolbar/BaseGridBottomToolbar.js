Ext.define('pcms.view.toolbar.BaseGridBottomToolbar', {
    extend: 'Ext.grid.PagingToolbar',
    xtype: 'base-grid-bottomtoolbar',

    requires: [],

    ui: 'slim',
    dock: 'bottom',
    displayInfo: true,
    displayMsg: 'Displaying records {0} - {1} of {2}',
    emptyMsg: 'No data to display'
});
