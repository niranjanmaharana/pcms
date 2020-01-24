Ext.define('pcms.view.baseComponents.BaseCombo', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'basecombo',

    minChars: 3,
    queryMode: 'remote',
    hideTrigger: true,
    anyMatch: true,
    forceSelection: true,

    queryParam: 'SEARCH_TERM',
    pageSize: 10,
    itemTpl: Ext.create('Ext.XTemplate',
        '<tpl for=".">',
        '<div class="x-boundlist-item">{rptgPrchsrOrgNm} ({rptgPrchsrOrgNbr})</div>',
        '</tpl>'),

    listConfig: {
        loadMask: {
            cls: 'combo-mask'
        },
        loadingCls: 'combo-mask',
        emptyText: '<span class="noresult-error" style="padding: 10px;">&#9888 No result found</span>'
    }
});