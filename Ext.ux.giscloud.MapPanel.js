Ext.namespace('Ext.ux.giscloud');

Ext.ux.giscloud.getMapPanel = function (config)
{
    var gcToolbarBox = new Ext.ux.giscloud.ToolbarBox();
    
    var gcViewerBox = new Ext.ux.giscloud.ViewerBox(
        {
            mapId: config.mapId,
            layerId: config.layerId,
            gcToolbar: gcToolbarBox
        }
    );

    return new Ext.Panel(
        {
            title:config.title,
            region: config.region,
            layout: 'vbox',
            items: [gcToolbarBox, gcViewerBox]
        }
    );    
};