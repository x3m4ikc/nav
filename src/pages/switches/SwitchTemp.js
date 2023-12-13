import Sidebar from '../../Components/Sidebar/Sidebarv2';
import TopBar from '../../Components/TopBar/TopBar';
import { Box } from '@mui/material';

const SwitchTemp = () => {
    return (
        <Box sx={{ display: 'flex'}}>
            <Sidebar />
            <TopBar/>
        </Box>
    )
}

export default SwitchTemp;