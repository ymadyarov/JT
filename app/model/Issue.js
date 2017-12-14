Ext.define('JT.model.Issue', {
	extend: 'Ext.data.Model',
	fields: ['id', 'key', 
		{
			name: 'assignee',
			convert: function (value, record) {
				return record.data.fields.assignee ? record.data.fields.assignee.displayName: null;
			}
		}, {
			name: 'timeoriginalestimate',
			convert: function (value, record) {
				var total = record.data.fields.timeoriginalestimate ? (record.data.fields.timeoriginalestimate)/60 : 0;
				var hours = Math.floor(Math.abs(total) / 60);
				var mins = Math.abs(mins) % 60;
				hours = hours > 0 ? hours > 1 ? hours + ' hours' :  hours + ' hour' : '';
				mins = mins > 0 ? mins > 1 ? mins + ' minutes' : mins + ' minute' : '';
				var time = hours ? hours + ' ' : '' + mins ? mins + ' ' : '';
				return time;
			}
		}, {
			name: 'blueman',
			convert: function (value, record) {
				return record.data.fields.customfield_13300 ? record.data.fields.customfield_13300.value: null;
			}
			//customfield_13300
		}
	]
});