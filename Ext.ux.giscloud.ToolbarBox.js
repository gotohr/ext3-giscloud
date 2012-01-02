Ext.namespace('Ext.ux.giscloud');

Ext.ux.giscloud.ToolbarBox = Ext.extend(Ext.BoxComponent, {
    autoEl: {
        tag: 'div',
        cls: 'x-giscloud-toolbar'
    },

    initComponent: function() {
        Ext.apply(this, {
            width: '100%', height:22
        });
        Ext.ux.giscloud.ToolbarBox.superclass.initComponent.apply(this, arguments);
    },
    
    initToolbar: function () {
        var that = this;
        giscloud.ready(function() {
        });
    },
    
    // Override an existing function
    onRender: function() {
        Ext.ux.giscloud.ToolbarBox.superclass.onRender.apply(this, arguments);
        this.initToolbar();
    }
});