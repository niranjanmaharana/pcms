Ext.define('pcms.view.navbar.Toolbar', {
    extend: 'Ext.ActionSheet',
    xtype: 'app-navigation',
    reference: 'ref-Navigation',

    viewModel: 'titlebar',

    side: 'left',

    title: 'PCMS',

    items: [{
        text: 'Delete draft',
        ui: 'decline'
    }, {
        text: 'Save draft'
    }, {
        text: 'Cancel',
        ui: 'confirm'
    }]
});