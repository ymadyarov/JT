Ext.define('JT.model.Issue', {
	extend: 'Ext.data.Model',
	fields: ['id', 'key', 'summary', {
		name: 'summary',
		convert: function (value, record) {
			return record.data.fields.summary ? record.data.fields.summary : null;
		}
	},{
		name: 'assignee',
		convert: function (value, record) {
			return record.data.fields.assignee ? record.data.fields.assignee.displayName : null;
		}
	},{
		name: 'engineer',
		convert: function (value, record) {			
			return record.data.fields.customfield_11802 ? record.data.fields.customfield_11802.displayName : record.get('assignee');
		}
	}, {
		name: 'originalestimate',
		convert: function (value, record) {
			//return Common.formatTime(record.data.fields.timeoriginalestimate);
			return record.data.fields.timeoriginalestimate;
		}
	}, {
		name: 'timeestimate',
		convert: function (value, record) {
			//return Common.formatTime(record.data.fields.timeestimate);
			return record.data.fields.timeestimate;
		}
	}, {
		name: 'timespent',
		convert: function (value, record) {
			//return Common.formatTime(record.data.fields.timespent);
			return record.data.fields.timespent;
		}
	}, {
		name: 'blueman',
		convert: function (value, record) {
			return record.data.fields.customfield_13300 ? record.data.fields.customfield_13300.value : null;
		}
		//customfield_13300
	}, {
		name: 'progress',
		convert: function (value, record) {
			return record.data.fields.aggregateprogress.percent ? record.data.fields.aggregateprogress.percent / 100 : null;
		}
	}]
});