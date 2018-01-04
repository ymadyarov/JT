Ext.define('JT.store.Issues', {
	extend: 'Ext.data.Store',
	alias: 'store.issues',
	model: 'JT.model.Issue',
	groupField: 'engineer',
	sorters: {property: 'engineer', direction: 'ASC'},
	proxy: {
		type: 'ajax',
		//url: 'http://localhost/Test1/jira/rest/api/2/search?jql=assignee=ymadyarov&fields=id',
		//url: 'http://localhost/Test1/jira/rest/api/2/search?jql=assignee=ymadyarov%20AND%20resolution=Unresolved',
		//url: 'http://localhost/Test/data.json',
		url:   'http://localhost/Test/jira/rest/api/2/search?jql=sprint=1282%20AND%20assignee!=empty%20AND%20status!=Closed',
		headers: Common.proxyHeaders,//{'Authorization': 'Basic eW1hZHlhcm92OkluZ29kd2V0cnVzdDQh'},
		reader: {
			type: 'json',
			rootProperty: 'issues'
		}
	},	
	autoLoad: true
 });