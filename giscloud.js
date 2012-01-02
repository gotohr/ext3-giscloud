Ext.onReady(function(){
    var v = new Ext.Viewport(
        {
            layout: 'border',
            items : Ext.ux.giscloud.getMapPanel(
                {
                    title:'Ext.ux.giscloud MapPanel',
                    region: 'center',
                    mapId: 7022,
                    layerId: 28098
                }
            )
        }
    );
});