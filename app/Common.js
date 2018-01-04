Ext.define('JT.Common', {
    alternateClassName: 'Common',
    singleton: true,
    formatTime(time) {
        if (time == null) return '';
        time = time / 60;
        var hours = Math.floor(Math.abs(time) / 60);
        var mins = Math.abs(time) % 60;
        hours = hours != null ? hours > 1 || hours == 0 ? hours + ' hours' :  hours + ' hour' : '';
        mins = mins != null ? mins > 1 || mins == 0 ? mins + ' minutes' : mins + ' minute' : '';
        return hours ? hours + ' ' : '' + mins ? mins + ' ' : '';
    }
});