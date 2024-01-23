import { useState } from 'react';
import './SensorButtons.css'

export const SensorButtonsTemp = () => {


    const [activeButton, setActiveButton] = useState(1);
    
    const handleButtonClick = (group) => {
        setActiveButton(group);
        console.log(group)
      };

    return (
                <div className="buttons-holder">
                    <button onClick={() => handleButtonClick(1)} className={activeButton === 1 ? 'but activeBut': 'but'}>Группа датчиков 1</button>
                    <button onClick={() => handleButtonClick(2)} className={activeButton === 2 ? 'but activeBut': 'but'}>Группа датчиков 2</button>
                    <button onClick={() => handleButtonClick(3)} className={activeButton === 3 ? 'but activeBut': 'but'}>Группа датчиков 3</button>
                    <button onClick={() => handleButtonClick(4)} className={activeButton === 4 ? 'but activeBut': 'but'}>Внешние датчики</button>
                </div> 
            )
}

export default SensorButtonsTemp;