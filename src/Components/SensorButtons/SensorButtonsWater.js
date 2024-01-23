import { useState } from 'react';
import './SensorButtons.css'

const SensorButtonsWater = () => {
    
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (group) => {
        setActiveButton(group);
        console.log(group)
      };

      return (
        <div className="buttons-holder">
          <button onClick={() => handleButtonClick(1)} className={activeButton === 1 ? 'but-air activeBut': 'but-air'}>Влажность</button>
          <button onClick={() => handleButtonClick(2)} className={activeButton === 2 ? 'but-air activeBut': 'but-air'}>Уровень CO2</button>
        </div>
    )
}

export default SensorButtonsWater;