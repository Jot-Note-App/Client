export const convertTimeStringtoFormattedDateString = (time: string, includeTimeOfDay = false): string => {
    var date = new Date(time).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    if (includeTimeOfDay) {
        var time = new Date(time).toLocaleTimeString('en-GB', { hour: 'numeric', minute: '2-digit', hourCycle: 'h12' });
        date = `${date}, ${time}`;
    }
    return date;
}