import { Box, Typography } from '@mui/material';
import './TopBar.css'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import image_2 from '../../static/images/Container_2.png';
import { useLocation } from 'react-router-dom';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

const TopBar = () => {

    const { pathname } = useLocation();

    return (
        pathname === '/switch-temp' ? (

        <Box className="topbar">
            <Box className='temp-changer'>
                <Box className='day-temp'>
                    <div className='icon-with-text'>
                        <WbSunnyOutlinedIcon className='temp-icon'/>
                        <Typography className='temp-text' style={{ fontSize: '16px' }}>Дневная температура</Typography>
                    </div>
                    <div className='switch-bar'>
                        <RemoveOutlinedIcon className='minus'/>
                        <Typography className='switch-text'>24°С</Typography>
                        <AddOutlinedIcon className='plus'/>
                    </div>
                </Box>
                <Box className='night-temp'>
                    <div className='icon-with-text-night'>
                        <NightsStayOutlinedIcon className='temp-icon'/>
                        <Typography className='temp-text' style={{ fontSize: '16px' }}>Ночная температура</Typography>
                    </div>
                    <div className='switch-bar'>
                        <RemoveOutlinedIcon className='minus'/>
                        <Typography className='switch-text'>21°С</Typography>
                        <AddOutlinedIcon className='plus'/>
                    </div>
                </Box>
            </Box>
                <img src={image_2} alt='Container_image' className='container-image'/>

                <div className='layer_1'>
                    <div className='radioicon-holder_1'>
                        <RadioButtonCheckedOutlinedIcon style={{ fontSize: 14, color: '#46F357' }} /><span className='holder_text'>Датчик №1</span>
                    </div>
                    <div className='radioicon-holder_2'>
                        <RadioButtonCheckedOutlinedIcon style={{ fontSize: 14, color: '#46F357' }}/><span className='holder_text'>Датчик №2</span>
                    </div>
                </div>

                <div className='layer_2'>
                    <div className='radioicon-holder_1'>
                        <RadioButtonCheckedOutlinedIcon style={{ fontSize: 14, color: '#46F357' }} /><span className='holder_text'>Датчик №1</span>
                    </div>
                    <div className='radioicon-holder_2'>
                        <RadioButtonCheckedOutlinedIcon style={{ fontSize: 14, color: '#46F357' }}/><span className='holder_text'>Датчик №2</span>
                    </div>
                </div>

                <div className='layer_3'>
                    <div className='radioicon-holder_1'>
                        <RadioButtonCheckedOutlinedIcon style={{ fontSize: 14, color: '#46F357' }} /><span className='holder_text'>Датчик №1</span>
                    </div>
                    <div className='radioicon-holder_2'>
                        <RadioButtonCheckedOutlinedIcon style={{ fontSize: 14, color: '#46F357' }}/><span className='holder_text'>Датчик №2</span>
                    </div>
                </div>

                <div className='layer_4'>

                </div>
            
        </Box>
        ) : (
            <Box className="topbar">
                <div>
                    <img src={image_2} alt='Container_image' className='container-image-water'/>
                </div>
        </Box>
        )
    )
}

export default TopBar;