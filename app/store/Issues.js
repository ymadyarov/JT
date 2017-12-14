Ext.define('JT.store.Issues', {
	extend: 'Ext.data.Store',
	alias: 'store.issues',
	model: 'JT.model.Issue',
	proxy: {
		type: 'ajax',
		//url: 'http://localhost/Test1/jira/rest/api/2/search?jql=assignee=ymadyarov&fields=id',
		//url: 'http://localhost/Test1/jira/rest/api/2/search?jql=assignee=ymadyarov%20AND%20resolution=Unresolved',
		url: 'http://localhost/Test/data.json',
		//jira/rest/api/2/search?jql=sprint=1266%20AND%20assignee!=empty%20AND%20status!=Closed',
		headers:{'Authorization': 'Basic eW1hZHlhcm92OkluZ29kd2V0cnVzdDQh'},
		reader: {
			type: 'json',
			rootProperty: 'issues'
		}
	},
	autoLoad: true
 });