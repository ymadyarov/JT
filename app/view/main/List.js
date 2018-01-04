Ext.define('JT.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'JT.store.Issues'
    ],
    title: 'Tasks',

    store: {
        type: 'issues'
    },
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype:'combo',
            fieldLabel: 'Sprint',
            labelAlign: 'right',
            labelWidth: 50
        }, {
            xtype: 'checkbox',            
            boxLabel: 'Grouped by Engineer'
        }]
    }],
    features: [{
        id: 'group',
        ftype: 'groupingsummary',
        groupHeaderTpl: '{name}',
        collapsible: false,
        hideGroupedHeader: true,
        enableGroupingMenu: false
    }],
    columns: [
        { text: 'Engineer',  dataIndex: 'engineer', align: 'left', width: 120 },
        //{ text: 'Assignee',  dataIndex: 'assignee', align: 'left', width: 200 },
        //{ text: 'Issue', dataIndex: 'key', align: 'left'},
        { text: 'Issue', dataIndex: 'summary', align: 'left', width: 220,
            renderer: function (value, metaData, record) {
                metaData.tdAttr = 'data-qtip="' + value + '"';
                return record.get('key') + ': ' + value;
            }
        }, {
            text: 'Progress',
            xtype: 'widgetcolumn',
            width: 100,
            dataIndex: 'progress',
            widget: {
                xtype: 'progressbarwidget',
                textTpl: [
                    '{percent:number("0")}%'
                    //'{%if="Ext.IsEmpty(percent)"zzz%}'
                    //'<tpl if="Ext.IsEmpty(percent)">',
                    //'<b>do somthing</b>',
                    //'</tpl>'
                ]
            }
        }, { 
            text: 'Estimated', dataIndex: 'originalestimate', align: 'right',
            summaryType: 'sum',
            renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
                return Common.formatTime(value);
            },
            summaryRenderer: function(value, summaryData, dataIndex) {
                return Common.formatTime(value);
            }
        }, { 
            text: 'Remaining', dataIndex: 'timeestimate', align: 'right',
            summaryType: 'sum',
            renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
                return Common.formatTime(value);
            },
            summaryRenderer: function(value, summaryData, dataIndex) {
                return Common.formatTime(value);
            }
        }, { 
            text: 'Spent', dataIndex: 'timespent', align: 'right',
            summaryType: 'sum',
            renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
                return Common.formatTime(value);
            },
            summaryRenderer: function(value, summaryData, dataIndex) {
                return Common.formatTime(value);
            }
        },
        //{ text: 'Remaining', dataIndex: 'timeestimate', align: 'left'},
        //{ text: 'Spent', dataIndex: 'timespent', align: 'left'},
        { text: 'Blue man group', dataIndex: 'blueman', align: 'left', flex: 1}
    ],
    listeners: {
        select: 'onItemSelected'
    }
});
