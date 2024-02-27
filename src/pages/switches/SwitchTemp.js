import NavMenu from "../../Components/NavMenu/NavMenu";
import TopBar from '../../Components/TopBar/TopBar';
import SensorButtonsTemp from "../../Components/SensorButtons/SensorButtonsTemp";
import AreaChartComponent from "../../Components/Chart/ChartComponent";
import { Box } from '@mui/material';

const SwitchTemp = () => {

    const [activeButton, setActiveButton] = useState(1);
    
    const handleButtonClick = (group) => {
        setActiveButton(group);
        console.log(group)
      };


    return (
        <Box sx={{ display: 'flex'}}>
            <NavMenu />
            <Box>
                <TopBar/>
                <SensorButtonsTemp/>
                {if (activeButton === 1)}
                <AreaChartComponent name="Датчик 1"/>
                <AreaChartComponent name="Датчик 2"/>
            </Box>
        </Box>
    )
}

export default SwitchTemp;