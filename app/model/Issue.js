Ext.define('JT.model.Issue', {
	extend: 'Ext.data.Model',
	fields: ['id', 'key', 
		{
			name: 'assignee',
			convert: function (value, record) {
				return record.data.fields.assignee ? record.data.fields.assignee.displayName: null;
			}
		}, {
			name: 'originalestimate',
			convert: function (value, record) {
				return Common.formatTime(record.data.fields.timeoriginalestimate);
			}
		}, {
			name: 'timeestimate',
			convert: function (value, record) {
				return Common.formatTime(record.data.fields.timeestimate);
			}
		}, {
			name: 'timespent',
			convert: function (value, record) {
				return Common.formatTime(record.data.fields.timespent);
			}
		}, {
			name: 'blueman',
			convert: function (value, record) {
				return record.data.fields.customfield_13300 ? record.data.fields.customfield_13300.value: null;
			}
			//customfield_13300
		}, {
			name: 'progress',
			convert: function (value, record) {
				return record.data.fields.aggregateprogress.percent ? record.data.fields.aggregateprogress.percent / 100 : null;
			}
		}
	]
});