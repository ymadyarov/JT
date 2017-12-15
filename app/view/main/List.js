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
    columns: [
        { text: 'Assignee',  dataIndex: 'assignee', align: 'left', width: 200 },
        { text: 'Issue', dataIndex: 'key', align: 'left'},
        {
            text     : 'Progress',
            xtype    : 'widgetcolumn',
            width    : 120,
            dataIndex: 'progress',
            widget: {
                xtype: 'progressbarwidget',
                textTpl: [
                    '{percent:number("0")}%'
                ]
            }
        },
        { text: 'Original estimate', dataIndex: 'originalestimate', align: 'left'},
        { text: 'Original estimate', dataIndex: 'timeoriginalestimate', align: 'left'},
        { text: 'Estimate', dataIndex: 'timeestimate', align: 'left'},
        { text: 'Blue man group', dataIndex: 'blueman', align: 'left', flex: 1}
    ],
    listeners: {
        select: 'onItemSelected'
    }
});
