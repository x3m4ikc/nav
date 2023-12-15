import './NavMenu.css'
import DateTimeComponent from "../DateTime/CurrentDateTime";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useLocation } from 'react-router-dom';

const NavMenu = () => {

    const {pathname} = useLocation();
    const setActive = ({isActive}) => isActive ? "active" : "";

    return (
        <div className="nav-menu">
            <DateTimeComponent />
            <ul className='navigation'>
                <li className={setActive}>
                    <a href='/' className='link-item'>
                        <HomeOutlinedIcon className='nav-icon'/>
                        <span className='nav-text'>Пункт меню</span>
                    </a>
                </li>
                <li className={setActive}>
                    <a href='/select' className='link-item'>
                        <SettingsOutlinedIcon className='nav-icon'/>
                        <span className='nav-text'>Пункт меню</span>
                    </a>
                </li>
                <li className='navigation-item'>
                    <a href={pathname} className='link-item'>
                        <SettingsOutlinedIcon className='nav-icon'/>
                        <span className='nav-text'>Показания датчиков</span>
                        <RemoveOutlinedIcon className='icon-minus'/>
                    </a>
                    <ul className='sub-navigation'>
                        <li className={setActive}>
                            <a href='/switch-temp' className='link-item'>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <span className='nav-text'>Температура</span>
                            </a>
                        </li>
                        <li className={setActive}>
                            <a href='/switch-water' className='link-item'>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <span className='nav-text'>Влажность и CO2</span>
                            </a>
                        </li>
                        <li className={setActive}>
                            <a href='/switch-air' className='link-item'>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <span className='nav-text'>Пункт подменю</span>
                            </a>
                        </li>
                        <li className={setActive}>
                            <a href='/select' className='link-item'>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <span className='nav-text'>Пункт подменю</span>
                            </a>
                        </li>
                        <li className={setActive}>
                            <a href='/select' className='link-item'>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <span className='nav-text'>Пункт подменю</span>
                            </a>
                        </li>
                        <li className={setActive}>
                            <a href='/select' className='link-item'>
                                <SettingsOutlinedIcon className='nav-icon'/>
                                <span className='nav-text'>Пункт подменю</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className={setActive}>
                    <a href='/select' className='link-item'>
                    <SettingsOutlinedIcon className='nav-icon'/>
                    <span className='nav-text'>Пункт меню</span>
                    </a>
                </li>
                <li className={`navigation-item ${setActive}`}>
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