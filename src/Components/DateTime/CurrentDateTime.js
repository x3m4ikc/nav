import './DateTime.css';

const CurrentDate = () => {

    const curDate = new Date().toLocaleDateString();
    return curDate;
};

const CurrentTime = () => {

    const curTime = new Date().toLocaleTimeString({hour: '2-digit', minute: '2-digit'})
    const timeToShow = curTime.split(':')
    return timeToShow[0] + ":" + timeToShow[1];
};

const DateTimeComponent = () => {
    return (
        <div className="datetime">
            <div className="time">{CurrentTime()}</div>
            <div className="date">{CurrentDate()}</div>
        </div>
    )
}

export default DateTimeComponent;

