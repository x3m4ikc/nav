import { useEffect, useState } from "react";
import './Sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSubmenu } from "../../utils/SubmenuProvider";
import CurrentDate from "../DateTime/CurrentDate";
import CurrentTime from "../DateTime/CurrentTime";

const Sidebar = () => {

    const navigate = useNavigate();
    const {pathname} = useLocation();
    const { isSubMenuOpen, toggleSubMenu} = useSubmenu();
    const setActive = ({isActive}) => isActive ? 'active' : 'nav-item';

    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])

    return (
        <div className="sidebar">
            <div className="datetime">
                <div className="time">{CurrentTime()}</div>
                <div className="date">{CurrentDate()}</div>
            </div>
            <ul className="navigation">
                <li>
                    <NavLink to='/' className={setActive} width='100%'>
                        <HomeOutlinedIcon/>
                        <span className="text">Пункт меню</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/select' className='nav-item'>
                    {/* <div className='nav-item'> */}
                        <YardOutlinedIcon/>
                        <span className="text">Пункт меню</span>
                    {/* </div> */}
                    </NavLink>
                </li>
                <li onClick={toggleSubMenu}>
                    <NavLink className='nav-item'>
                        <AnalyticsOutlinedIcon/>
                    <span className="text">Показания датчиков</span>
                        <ChangeHistoryOutlinedIcon className="arrow"/>
                        {/* Добавить изменение стрелки скрыть\открыть */}
                    {isSubMenuOpen && (
                        <ul className={`sumbenu ${isSubMenuOpen ? 'open' : '' }`}>
                            <li>
                                <NavLink to='/switch-temp' className={setActive}>
                                {/* <div className='nav-item'> */}
                                    <DeviceThermostatOutlinedIcon/>
                                <span className="text">Температура</span>
                                {/* </div> */}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/switch-air' className={setActive}>
                                {/* <div className='nav-item'> */}
                                    <AirOutlinedIcon/>
                                <span className="text">Влажность и СО2</span>
                                {/* </div> */}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/switch-water' className={setActive}>
                                {/* <div className='nav-item'> */}
                                    <WaterOutlinedIcon/>
                                <span className="text">Пункт подменю</span>
                                {/* </div> */}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/2' className={setActive}>
                                {/* <div className='nav-item'> */}
                                    <ElectricBoltOutlinedIcon/>
                                <span className="text">Пункт подменю</span>
                                {/* </div> */}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/3' className={setActive}>
                                {/* <div className='nav-item'> */}
                                    <ElectricBoltOutlinedIcon/>
                                <span className="text">Пункт подменю</span>
                                {/* </div> */}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/4' className={setActive}>
                                {/* <div className='nav-item'> */}
                                    <ElectricBoltOutlinedIcon/>
                                <span className="text">Пункт подменю</span>
                                {/* </div> */}
                                </NavLink>
                            </li>
                        </ul>
                    )}
                    </NavLink>
                    
                </li>
                <li>
                    <NavLink to='/account' className={setActive}>
                    {/* <div className='nav-item' > */}
                        <AccountCircleOutlinedIcon/>
                        <span className="text">Пункт подменю</span>
                    {/* </div> */}
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/settings' className={setActive}>
                    {/* <div className='nav-item'> */}
                        <SettingsOutlinedIcon/>
                        <span className="text">Пункт подменю</span>
                    {/* </div> */}
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/1' className={setActive}>
                    {/* <div className='nav-item'> */}
                        <SettingsOutlinedIcon/>
                        <span className="text">Пункт подменю</span>
                    {/* </div> */}
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;