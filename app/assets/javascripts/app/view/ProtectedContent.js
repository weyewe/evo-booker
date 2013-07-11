Ext.define('AM.view.ProtectedContent', {
    extend: 'Ext.panel.Panel',
		alias : 'widget.protected',
    
    layout: 'border',
    
    items: [
        {
            region: 'north',
            xtype : 'appHeader'
        },
        {
            region: 'center',
            xtype : 'appContent' 
        }
    ]
});
