Ext.namespace('Ext.ux.giscloud');

Ext.ux.giscloud.ViewerBox = Ext.extend(Ext.BoxComponent, {
    autoEl: {
        tag: 'div',
        cls: 'x-giscloud-viewer'
    },

    initComponent: function() {
        Ext.apply(this, {
            width: '100%',
            height: '100%'            
        });
        Ext.ux.giscloud.ViewerBox.superclass.initComponent.apply(this, arguments);
    },
   
    loadMap: function() {
        var marker, $ = giscloud.exposeJQuery();
        var that = this;
        giscloud.ready(function() {
            console.log(that.mapId);
            that.viewer = new giscloud.Viewer(that.getEl().id, that.mapId, { slider: true })
                .center(new giscloud.LonLat(233000, 6820000));
            that.viewer.loading.done(function() {
                that.getEl().unmask();
            });
            
            console.log('toolbar id', that.gcToolbar.getEl().id);
			that.toolbar = new giscloud.ui.Toolbar({ 			
			   viewer: that.viewer,
			   container: that.gcToolbar.getEl().id,
			   defaultTools: ["pan", "zoom", "full", "measure"]
			});            
            
        });
    },
    // Override an existing function
    onRender: function() {
        Ext.ux.giscloud.ViewerBox.superclass.onRender.apply(this, arguments);
        this.loadMap();
        this.getEl().mask();
    }
});