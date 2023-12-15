import './SensorButtons.css'
import { useLocation } from "react-router-dom";

const SensorButtons = () => {

    const {pathname} = useLocation();

    return (
        pathname === '/switch-temp' ? (
            <div className="buttons-holder">
                <button className='but'>Группа датчиков 1</button>
                <button className='but'>Группа датчиков 2</button>
                <button className='but'>Группа датчиков 3</button>
                <button className='but'>Внешние датчики</button>
            </div>
        ) : (
            <div className="buttons-holder">
                <button className='but-air'>Влажность</button>
                <button className='but-air'>Уровень CO2</button>
            </div>
        )
    )
}

export default SensorButtons;