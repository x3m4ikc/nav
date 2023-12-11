import './Sidebarv2.css'
import CurrentDate from '../DateTime/CurrentDate';
import CurrentTime from '../DateTime/CurrentTime';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Typography } from '@mui/material';

const Sidebarv2 = () =>  {

    const setActive = ({isActive}) => isActive ? 'active' : 'nav-item';

    return (
        <div className='sidebar'>
            <div className='datetime'>
            <div className="time">{CurrentTime()}</div>
                <div className="date">{CurrentDate()}</div>
            </div>
            <ul className='navigation'>
                <li className='navigation-item'>
                    <NavLink to='/' className={setActive}>
                        <div className='list-item'>
                            <HomeOutlinedIcon className='icon'/>
                            <Typography variant='body1' className='nav-text'>Пункт меню</Typography>
                        </div>
                    </NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/settings' className={setActive}>
                        <div className='list-item'>
                            <SettingsOutlinedIcon className='nav-icon'/>
                            <Typography variant='body1' className='nav-text'>Пункт меню</Typography>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebarv2;