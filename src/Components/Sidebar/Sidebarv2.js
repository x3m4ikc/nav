import './Sidebarv2.css'
import CurrentDate from '../DateTime/CurrentDate';
import CurrentTime from '../DateTime/CurrentTime';
import { useSubmenu } from '../../utils/SubmenuProvider';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';
import { Typography } from '@mui/material';

const Sidebar = () =>  {

    // Background к активной ссылке

    const { isSubMenuOpen, toggleSubMenu} = useSubmenu();
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
                    <NavLink to='/account' className={setActive}>
                        <div className='list-item'>
                            <SettingsOutlinedIcon className='nav-icon'/>
                            <Typography variant='body1' className='nav-text'>Пункт меню</Typography>
                        </div>
                    </NavLink>
                </li>
                <li className='navigation-item'>
                    {/* <NavLink className=''> */}
                    <div className='nav-item'>
                        <div className='list-item'>
                            <SettingsOutlinedIcon className='nav-icon'/>
                            <Typography variant='body1' className='nav-text'>Показания</Typography>
                            <ChangeHistoryOutlinedIcon className='nav-text'/>
                        </div>
                    </div>
                    {/* </NavLink> */}
                    <ul className={`sumbenu ${isSubMenuOpen ? 'open' : '' }`}>
                        <li className='navigation-item'>
                         <NavLink to='/switch-temp' className={setActive}>
                            <div className='list-item'>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <Typography variant='body1' className='nav-text'>Температура</Typography>
                            </div>
                         </NavLink>
                        </li>
                        <li className='navigation-item'>
                         <NavLink to='/switch-water' className={setActive}>
                            <div className='list-item'>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <Typography variant='body1' className='nav-text'>Влажность и CO2</Typography>
                            </div>
                         </NavLink>
                        </li>
                        <li className='navigation-item'>
                         <NavLink to='/account' className={setActive}>
                            <div className='list-item'>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <Typography variant='body1' className='nav-text'>Пункт подменю</Typography>
                            </div>
                         </NavLink>
                        </li>
                        <li className='navigation-item'>
                         <NavLink to='/account' className={setActive}>
                            <div className='list-item'>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <Typography variant='body1' className='nav-text'>Пункт подменю</Typography>
                            </div>
                         </NavLink>
                        </li>
                        <li className='navigation-item'>
                         <NavLink to='/account' className={setActive}>
                            <div className='list-item'>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <Typography variant='body1' className='nav-text'>Пункт подменю</Typography>
                            </div>
                         </NavLink>
                        </li>
                        <li className='navigation-item'>
                         <NavLink to='/account' className={setActive}>
                            <div className='list-item'>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <Typography variant='body1' className='nav-text'>Пункт подменю</Typography>
                            </div>
                         </NavLink>
                        </li>
                    </ul>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/account' className={setActive}>
                        <div className='list-item'>
                            <SettingsOutlinedIcon className='nav-icon'/>
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

export default Sidebar;