import NavMenu from "../../Components/NavMenu/NavMenu";
import TopBar from '../../Components/TopBar/TopBar';
import SensorButtonsWater from "../../Components/SensorButtons/SensorButtonsWater";
import AreaChartComponent from "../../Components/Chart/ChartComponent";
import { Box } from '@mui/material';

const SwitchWater = () => {
    return (
        <Box sx={{ display: 'flex'}}>
            <NavMenu />
            <Box>
                <TopBar/>
                <SensorButtonsWater/>
                <AreaChartComponent name="Датчик 1"/>
                <AreaChartComponent name="Датчик 2"/>
            </Box>
        </Box>
    )
}

export default SwitchWater;