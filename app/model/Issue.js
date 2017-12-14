Ext.define('JT.model.Issue', {
	extend: 'Ext.data.Model',
	fields: ['id', 'key', 
		{
				name: 'timestamp',

		 convert: function (value) {
			 return new Date(value);
		 }
		}
	]
});