import date from 'date-and-time';

export const CurrentDate = () => {
    var now = new Date();
    var MonthDayYear = date.format(now, 'MMMM DD, YYYY')
    var Day = date.format(now, 'dddd');

    return (
        <div>
            <h3>{Day}</h3>
            <h5>{MonthDayYear}</h5>
        </div>
    )
}