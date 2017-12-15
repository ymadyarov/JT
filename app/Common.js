Ext.define('JT.Common', {
    alternateClassName: 'Common',
    singleton: true,
    formatTime(time) {
        time = time / 60;
        var hours = Math.floor(Math.abs(time) / 60);
        var mins = Math.abs(time) % 60;
        hours = hours > 0 ? hours > 1 ? hours + ' hours' :  hours + ' hour' : '';
        mins = mins > 0 ? mins > 1 ? mins + ' minutes' : mins + ' minute' : '';
        return hours ? hours + ' ' : '' + mins ? mins + ' ' : '';
    }

});