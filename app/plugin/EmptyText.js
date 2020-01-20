/**
 *  EmptyText plugin - use on views to set the default emptyText to what is provided in pcms config.
 *	Note: we are doing it via a plugin instead of binding due to major timing issues with the bind.
 */
Ext.define('pcms.plugin.EmptyText', {
    extend: 'Ext.plugin.Abstract',
    alias: 'plugin.empty-text',

    requires: ['pcms.util.Configuration'],

    /**
     *  Sets the empty text
     */
    init: function(cmp) {
        cmp.emptyText = cmp.emptyText || pcms.config.Configuration.config.emptyText;
    }
});
