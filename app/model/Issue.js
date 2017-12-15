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
				return record.data.fields.timeoriginalestimate ? (record.data.fields.timeoriginalestimate) : 0;
			}
		}, {
			name: 'timeestimate',
			convert: function (value, record) {
				return record.data.fields.timeestimate ? (record.data.fields.timeestimate) : 0;
			}
		}, {
			name: 'originalestimate',
			convert: function (value, record) {
				return Common.formatTime(record.data.fields.timeoriginalestimate ? (record.data.fields.timeoriginalestimate) : 0);
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