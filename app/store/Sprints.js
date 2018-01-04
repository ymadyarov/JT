Ext.define('JT.store.Sprints', {
	extend: 'Ext.data.Store',
	alias: 'store.sprints',
	//model:'JT.model.Sprint',
	fields:[''],
	proxy: {
		type: 'ajax',
		url: 'http://jira.acresso.com/jira/rest/agile/1.0/board/264/sprint',
		headers: Common.proxyHeaders,
		reader: {
			type: 'json',
			rootProperty: 'values'
		}
	},
	autoLoad: true
 });