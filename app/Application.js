/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('JT.Application', {
    extend: 'Ext.app.Application',
    
    name: 'JT',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        /*Ext.define('Issue1', {
			extend: 'Ext.data.Model',
			fields: ['id', 'key', 'assignee']
		});
		//debugger;
		var store = Ext.create('Ext.data.Store', {
			 model: 'Issue1',
			 proxy: {
				 type: 'ajax',
				 url : 'http://localhost/Test1/jira/rest/api/2/search?jql=assignee=ymadyarov',
				 headers:{'Authorization': 'Basic eW1hZHlhcm92OkluZ29kd2V0cnVzdDQh'},
				 reader: {
					 type: 'json',
					 rootProperty: 'issues'
				 }
			 },
			 autoLoad: false
		});
		

		store.load({
			scope: this,
			callback: function(records, operation, success) {
				// the operation object
				// contains all of the details of the load operation
				//debugger;
			}
		});*/
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
