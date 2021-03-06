Ext.define('AM.view.Content', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.appContent',
    require : [
			'AM.view.calendar.BookingCalendar'
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
				html : "Zero",
				xtype : 'bookingCalendar'
			},
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
