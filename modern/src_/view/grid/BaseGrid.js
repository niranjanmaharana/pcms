Ext.define('pcms.view.grid.BaseGrid', {
    extend: 'Ext.grid.Grid',
        xtype: 'gridbasepanel',

        requires: [
            'pcms.view.toolbar.BaseGridBottomToolbar',
            'pcms.plugin.EmptyText'
        ],
        border: true,

        bufferedRenderer: false,

        columnLines: true,

        enableColumnMove: false,

        frame: false,

        layout: 'fit',

        viewConfig: {
            deferEmptyText: false,
            plugins: [{
                ptype: 'empty-text'
            }],
            loadMask: true,
            loadingText: 'Loading...',
            stripeRows: true,
            trackOver: true,
            enableTextSelection: true
        },

        listeners: {
            columnhide: function(ct /*, column*/ ) {
                Ext.defer(function() {
                    ct.scrollTo(ct.grid.getView().getScrollX());
                }, 25);
            }
        }
});