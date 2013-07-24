Ext.define('AM.view.calendar.BookingCalendar', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.bookingCalendar', 
    
		id: 'app-center',
		title: '...', // will be updated to the current view's date range
		region: 'center',
		layout: 'border',
		xtype : 'container' , 
		
		listeners: {
		    'afterrender': function(){
		        Ext.getCmp('app-center').header.addCls('app-center-header');
		    }
		},
		items: [{
		    id:'app-west',
		    region: 'west',
		    width: 179,
		    border: false,
		    items: [{
		        xtype: 'datepicker',
		        id: 'app-nav-picker',
		        cls: 'ext-cal-nav-picker',
		        listeners: {
		            'select': {
		                fn: function(dp, dt){
		                    Ext.getCmp('app-calendar').setStartDate(dt);
		                },
		                scope: this
		            }
		        }
		    },{
		        xtype: 'extensible.calendarlist',
		        store: this.calendarStore,
		        border: false,
		        width: 178
		    }]
		}, 	// end of items inside app-west 
		{
		    xtype: 'extensible.calendarpanel',
		    eventStore: this.eventStore,
		    calendarStore: this.calendarStore,
		    border: false,
		    id:'app-calendar',
		    region: 'center',
		    activeItem: 3, // month view

		    // Any generic view options that should be applied to all sub views:
		    viewConfig: {
		        //enableFx: false,
		        //ddIncrement: 10, //only applies to DayView and subclasses, but convenient to put it here
		        //viewStartHour: 6,
		        //viewEndHour: 18,
		        //minEventDisplayMinutes: 15
		        showTime: false
		    },

		    // View options specific to a certain view (if the same options exist in viewConfig
		    // they will be overridden by the view-specific config):
		    monthViewCfg: {
		        showHeader: true,
		        showWeekLinks: true,
		        showWeekNumbers: true
		    },

		    multiWeekViewCfg: {
		        //weekCount: 3
		    },

		    // Some optional CalendarPanel configs to experiment with:
		    //readOnly: true,
		    //showDayView: false,
		    //showMultiDayView: true,
		    //showWeekView: false,
		    //showMultiWeekView: false,
		    //showMonthView: false,
		    //showNavBar: false,
		    //showTodayText: false,
		    //showTime: false,
		    //editModal: true,
		    //enableEditDetails: false,
		    //title: 'My Calendar', // the header of the calendar, could be a subtitle for the app

		    listeners: {
		        'eventclick': {
		            fn: function(vw, rec, el){
		                this.clearMsg();
		            },
		            scope: this
		        },
		        'eventover': function(vw, rec, el){
		            //console.log('Entered evt rec='+rec.data[Extensible.calendar.data.EventMappings.Title.name]', view='+ vw.id +', el='+el.id);
		        },
		        'eventout': function(vw, rec, el){
		            //console.log('Leaving evt rec='+rec.data[Extensible.calendar.data.EventMappings.Title.name]+', view='+ vw.id +', el='+el.id);
		        },
		        'eventadd': {
		            fn: function(cp, rec){
		                this.showMsg('Event '+ rec.data[Extensible.calendar.data.EventMappings.Title.name] +' was added');
		            },
		            scope: this
		        },
		        'eventupdate': {
		            fn: function(cp, rec){
		                this.showMsg('Event '+ rec.data[Extensible.calendar.data.EventMappings.Title.name] +' was updated');
		            },
		            scope: this
		        },
		        'eventdelete': {
		            fn: function(cp, rec){
		                this.showMsg('Event '+ rec.data[Extensible.calendar.data.EventMappings.Title.name] +' was deleted');
		            },
		            scope: this
		        },
		        'eventcancel': {
		            fn: function(cp, rec){
		                // edit canceled
		            },
		            scope: this
		        },
		        'viewchange': {
		            fn: function(p, vw, dateInfo){
								alert("The view is changed");
		                if(dateInfo){
		                    this.updateTitle(dateInfo.viewStart, dateInfo.viewEnd);
		                }
		            },
		            scope: this
		        },
		        'dayclick': {
		            fn: function(vw, dt, ad, el){
		                this.clearMsg();
		            },
		            scope: this
		        },
		        'rangeselect': {
		            fn: function(vw, dates, onComplete){
		                this.clearMsg();
		            },
		            scope: this
		        },
		        'eventmove': {
		            fn: function(vw, rec){
		                var mappings = Extensible.calendar.data.EventMappings,
		                    time = rec.data[mappings.IsAllDay.name] ? '' : ' \\a\\t g:i a';

		                rec.commit();

		                this.showMsg('Event '+ rec.data[mappings.Title.name] +' was moved to '+
		                    Ext.Date.format(rec.data[mappings.StartDate.name], ('F jS'+time)));
		            },
		            scope: this
		        },
		        'eventresize': {
		            fn: function(vw, rec){
		                rec.commit();
		                this.showMsg('Event '+ rec.data[Extensible.calendar.data.EventMappings.Title.name] +' was updated');
		            },
		            scope: this
		        },
		        'eventdelete': {
		            fn: function(win, rec){
		                this.eventStore.remove(rec);
		                this.showMsg('Event '+ rec.data[Extensible.calendar.data.EventMappings.Title.name] +' was deleted');
		            },
		            scope: this
		        },
		        'initdrag': {
		            fn: function(vw){
		                // do something when drag starts
		            },
		            scope: this
		        }
		    }
		}]
});
