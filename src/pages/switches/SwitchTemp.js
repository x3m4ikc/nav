import NavMenu from "../../Components/NavMenu/NavMenu";
import TopBar from '../../Components/TopBar/TopBar';
import SensorButtons from "../../Components/SensorButtons/SensorButtons";
import ChartBorder from "../../Components/ChartBorder/ChartBorder";
import { Box } from '@mui/material';

const SwitchTemp = () => {
    return (
        <Box sx={{ display: 'flex'}}>
            <NavMenu />
            <Box>
                <TopBar/>
                <SensorButtons/>
                <ChartBorder />
                <ChartBorder />
            </Box>
        </Box>
    )
}

export default SwitchTemp;