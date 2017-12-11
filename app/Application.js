/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Test1.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Test1',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        Ext.define('Issue', {
			extend: 'Ext.data.Model',
			fields: ['id', 'key']
		});
		debugger;
		var store = Ext.create('Ext.data.Store', {
			 model: 'Issue',
			 proxy: {
				 type: 'ajax',
				 url : 'http://localhost/Test1/jira/rest/api/2/search?jql=assignee=ymadyarov&fields=id',
				 headers:{'Authorization': 'Basic eW1hZHlhcm92OkluZ29kd2V0cnVzdDQh'},
				 reader: {
					 type: 'json',
					 rootProperty: 'issues'
				 }
			 },
			 autoLoad: false
		 });

		/*var store = Ext.create('Ext.data.Store', {
			model: 'Issue',
			proxy: {
				type: 'json',
				url : 'http://localhost/Test1/jira/rest/api/2/search?jql=assignee=ymadyarov&fields=id',
				rootProperty: 'issues'
			}
		});*/

		store.load();
		
		
		
		/*Ext.data.JsonP.request({
			url: 'http://jira.acresso.com/jira/rest/api/2/search?jql=assignee=ymadyarov&fields=id'			
		});*/
		Ext.Ajax.request({
            //url: 'jira/rest/api/2/mypermissions',
			url: 'http://localhost/Test1/jira/rest/api/2/mypermissions',
            //params: params,
            success: function (response) {
                debugger;
            },
            failure: function (response) {
                
            },
            scope: this
        });
		//debugger;
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
