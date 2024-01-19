import './NavMenu.css'
import DateTimeComponent from "../DateTime/CurrentDateTime";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { NavLink, useLocation } from 'react-router-dom';

const NavMenu = () => {

    const {pathname} = useLocation();
    const setActive = ({isActive}) => isActive ? "active" : "";

    return (
        <div className="nav-menu">
            <DateTimeComponent />
            <ul className='navigation'>
                <li>
                    <NavLink to='/' className={ ({ isActive }) => (isActive ? 'link-item active' : 'link-item')}>
                        <HomeOutlinedIcon className='nav-icon'/>
                        <span className='nav-text'>Пункт меню</span>
                    </NavLink>
                </li>
                <li className={setActive}>
                    <NavLink to='/select' className={ ({ isActive }) => (isActive ? 'link-item active' : 'link-item')}>
                        <SettingsOutlinedIcon className='nav-icon'/>
                        <span className='nav-text'>Пункт меню</span>
                    </NavLink>
                </li>
                <li className='navigation-item'>
                    <a href={pathname} className='link-item'>
                        <SettingsOutlinedIcon className='nav-icon'/>
                        <span className='nav-text'>Показания датчиков</span>
                        <RemoveOutlinedIcon className='icon-minus'/>
                    </a>
                    <ul className='sub-navigation'>
                        <li>
                            <NavLink to='/switch-temp' className={ ({ isActive }) => (isActive ? 'link-item active' : 'link-item')}>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <span className='nav-text'>Температура</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/switch-water' className={ ({ isActive }) => (isActive ? 'link-item active' : 'link-item')}>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <span className='nav-text'>Влажность и CO2</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/switch-air' className={ ({ isActive }) => (isActive ? 'link-item active' : 'link-item')}>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <span className='nav-text'>Пункт подменю</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/select' className={ ({ isActive }) => (isActive ? 'link-item active' : 'link-item')}>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <span className='nav-text'>Пункт подменю</span>
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to='/select' className={ ({ isActive }) => (isActive ? 'link-item active' : 'link-item')}>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <span className='nav-text'>Пункт подменю</span>
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to='/select' className={ ({ isActive }) => (isActive ? 'link-item active' : 'link-item')}>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <span className='nav-text'>Пункт подменю</span>
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href='/select' className='link-item'>
                    <SettingsOutlinedIcon className='nav-icon'/>
                    <span className='nav-text'>Пункт меню</span>
                    </a>
                </li>
                <li>
                    <a href='/account' className='link-item'>
                    <SettingsOutlinedIcon className='nav-icon'/>
                    <span className='nav-text'>Пункт меню</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavMenu;