import NavMenu from "../../Components/NavMenu/NavMenu";
import TopBar from '../../Components/TopBar/TopBar';
import SensorButtons from "../../Components/SensorButtons/SensorButtons";
import { Box } from '@mui/material';

const SwitchTemp = () => {
    return (
        <Box sx={{ display: 'flex'}}>
            <NavMenu />
            <Box>
                <TopBar/>
                <SensorButtons/>
            </Box>
        </Box>
    )
}

export default SwitchTemp;