Ext.define('AM.view.Content', {
    extend: 'Ext.toolbar.Toolbar',
    alias : 'widget.appContent',
    require : [
			'AM.view.Content.EditPassword'
		],
    
    // height: 53,
		id: 'app-Content',
		region: 'north',

		border: false,
		activeItem : 0 ,

		layout: {
			type : 'card',
			align: 'stretch'
		},
		
		items : [
			{
				html : "First",
				xtype : 'container'
			},
			{
				html : "Second",
				xtype : 'container'
			},
			{
				html : "Third",
				xtype : 'container'
			}
		]
		 
});
