Ext.define('AM.view.Header', {
    extend: 'Ext.toolbar.Toolbar',
    alias : 'widget.appHeader',
    require : [
			'AM.view.header.EditPassword'
		],
    
    // height: 53,
		id: 'app-header',
		region: 'north',

		border: false,

		layout: {
			type : 'vbox',
			align: 'stretch'
		},
		items : [
			{
				contentEl: 'app-header-content',
				height: 35,
				xtype : 'container'
			},
			{
				xtype: 'toolbar',
				items: [
					{
						iconCls: 'tasks-delete-task',
						id: 'delete-task-btn',
						disabled: false,
						tooltip: 'Calendar',
						xtype: 'button',
						text : "Calendar",
						action : "switchCalendar"

					},
					{
						iconCls: 'tasks-mark-complete',
						id: 'mark-complete-btn',
						disabled: false,
						tooltip: 'Bookings',
						xtype: 'button',
						text : "Bookings",
						action : "switchBooking"
					},
					{
						iconCls: 'tasks-mark-active',
						id: 'mark-active-btn',
						disabled: false,
						tooltip: 'Report',
						xtype: 'button',
						text : "Report",
						action : "switchReport"
					},
					{
						iconCls: 'tasks-mark-active',
						id: 'mark-master-btn',
						disabled: false,
						tooltip: 'Master Data',
						xtype: 'button',
						text : "Master Data",
						action : "switchMaster"
					},
					'->',
					{
						text: "Options",
						itemId : 'optionsMenu',
						text : "The email", 
						menu: [
							{
								action: 'editPassword',
								text: "Ganti Password",
								listeners: {
									click: function() {
										var editPasswordWindow = Ext.create('AM.view.header.EditPassword');
										editPasswordWindow.show();
									}
								}
							},
							{
								text: "Ganti Profile"
							}
						]
					},
					'-',
					{
						text: 'Logout',
						action: 'logoutUser'  
					}
				]
			}
		]
		
    
    // items: [
    //     {
    //         text: 'haha',
    //         // iconCls: 'book',
    //         action: 'panelUtama'  
    //     },
    // 				'->',
    // 				{
    // 					text: "Options",
    // 					itemId : 'optionsMenu',
    // 					menu: [
    // 						{
    // 							action: 'editPassword',
    // 							text: "Ganti Password",
    							// listeners: {
    							// 	click: function() {
    							// 		var editPasswordWindow = Ext.create('AM.view.header.EditPassword');
    							// 		editPasswordWindow.show();
    							//     
    							// 	}
    // 							}
    // 						},
    // 						{
    // 							text: "Ganti Profile"
    // 						}
    // 					]
    // 				},
    // 				'-',
    // 				{
    //         text: 'Logout',
    //         // iconCls: 'book',
    //         action: 'logoutUser'  
    //     }
    // ]
});
