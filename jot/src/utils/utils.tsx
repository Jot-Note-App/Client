export const convertTimeStringtoFormattedDateString = (time: string): string => {
    return new Date(time).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}