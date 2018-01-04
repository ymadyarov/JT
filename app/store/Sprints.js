Ext.define('JT.store.Sprints', {
	extend: 'Ext.data.Store',
	alias: 'store.sprints',
	fields:[''],
	proxy: {
		type: 'ajax',
		//url: 'http://localhost/Test1/jira/rest/api/2/search?jql=assignee=ymadyarov&fields=id',
		//url: 'http://localhost/Test1/jira/rest/api/2/search?jql=assignee=ymadyarov%20AND%20resolution=Unresolved',
		//url: 'http://localhost/Test/data.json',
		url:   'http://jira.acresso.com/jira/rest/agile/1.0/board/264/sprint',
		headers:{'Authorization': 'Basic eW1hZHlhcm92OkluZ29kd2V0cnVzdDQh'},
		reader: {
			type: 'json',
			rootProperty: 'values'
		}
	},
	autoLoad: true
 });