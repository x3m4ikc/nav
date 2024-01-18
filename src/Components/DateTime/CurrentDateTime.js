import './DateTime.css';
import Moment from "react-moment";

const CurrentDate = () => {

    const curDate = new Date().toLocaleDateString();
    return curDate;
};


const DateTimeComponent = () => {
    return (
        <div className="datetime">
            <Moment format="HH:mm" interval={1000} className='time'/>
            <div className="date">
            <Moment format="DD.MM.YYYY" interval={1000}/>
            </div>
        </div>
    )
}

export default DateTimeComponent;

