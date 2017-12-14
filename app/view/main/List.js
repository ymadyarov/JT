Ext.define('JT.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'JT.store.Issues'
    ],

    title: 'Issues',

    store: {
        type: 'issues'
    },

    columns: [
        { text: 'id',  dataIndex: 'id', align: 'left' },
        { text: 'key', dataIndex: 'key', align: 'left'}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
