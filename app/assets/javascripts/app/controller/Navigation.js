Ext.define("AM.controller.Navigation", {
	extend : "Ext.app.Controller",
	views : [
		"Header",
		"Content"
	],
	
 
	
	refs: [
		{
			ref: 'viewport',
			selector: 'vp'
		} ,
		{
			ref : 'content',
			selector : 'appContent'
		}
	],
	
	  
	
	 
	
	init : function( application ) {
		var me = this; 
		
		
		console.log("INSIDE init of Navigation.js");
		me.control({  
			'	button[action=switchCalendar]' : {
				click : me.switchScreen
			},
			'	button[action=switchBooking]' : {
				click : me.switchScreen
			},
			'	button[action=switchReport]' : {
				click : me.switchScreen
			},
			'	button[action=switchMaster]' : {
				click : me.switchScreen
			}
			
			
		});
	},
 

	switchScreen: function(btn){
		console.log('the button is clicked');
		console.log(btn);
		var me = this; 
		if( btn.action === 'switchCalendar'){
			me.getContent().layout.setActiveItem(0)
		}else{
			console.log("It is the other thing");
			me.getContent().layout.setActiveItem(2 );
		}
	}
	 
	   
});