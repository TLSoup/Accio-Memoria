import date from 'date-and-time';
import './lists.css';

export const CurrentDate = () => {
    let now = new Date();
    let MonthDayYear = date.format(now, 'MMMM DD, YYYY')
    let Day = date.format(now, 'dddd');

    return (
        <div>
            <div className="current-day">{Day}</div>
            <div className="current-mdy">{MonthDayYear}</div>
        </div>
    )
}