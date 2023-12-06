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
import { useLocation, useNavigate } from "react-router-dom";
import { useSubmenu } from "../../utils/SubmenuProvider";

const Sidebar = () => {

    const navigate = useNavigate();
    const {pathname} = useLocation();
    // Выделение активной ссылки в меню
    const [active, setActive] = useState();
    const { isSubMenuOpen, toggleSubMenu} = useSubmenu();

    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])

    return (
        <div className="sidebar">
            <div className="datetime">
                <div className="time">12:35</div>
                <div className="date">12.12.2012</div>
            </div>
            <ul className="navigation">
                <li>
                    <div className='nav-item' onClick={() => navigate('/')}>
                        <HomeOutlinedIcon/>
                        <span className="text">Главная</span>
                    </div>
                </li>
                <li>
                    <div className='nav-item' onClick={() => navigate('/select')}>
                        <YardOutlinedIcon />
                        <span className="text">Выбор программы</span>
                    </div>
                </li>
                <li onClick={toggleSubMenu}>
                    <div className='nav-item'>
                        <AnalyticsOutlinedIcon />
                    <span className="text">Показания датчиков</span>
                        <ChangeHistoryOutlinedIcon className="arrow" />
                        {/* Добавить изменение стрелки скрыть\открыть */}
                    {isSubMenuOpen && (
                        <ul className={`sumbenu ${isSubMenuOpen ? 'open' : '' }`}>
                            <li>
                                <div className='nav-item' onClick={() => navigate('/switch-temp')}>
                                    <DeviceThermostatOutlinedIcon />
                                <span className="text">Температура</span>
                                </div>
                            </li>
                            <li>
                                <div className='nav-item' onClick={() => navigate('/switch-air')}>
                                    <AirOutlinedIcon />
                                <span className="text">Кондиционирование</span>
                                </div>
                            </li>
                            <li>
                                <div className='nav-item' onClick={() => navigate('/switch-water')}>
                                    <WaterOutlinedIcon />
                                <span className="text">Растворный узел</span>
                                </div>
                            </li>
                            <li>
                                <div className='nav-item' onClick={() => navigate('/switch-energy')}>
                                    <ElectricBoltOutlinedIcon />
                                <span className="text">Электроэнергия</span>
                                </div>
                            </li>
                        </ul>
                    )}
                    </div>
                    
                </li>
                <li>
                    <div className='nav-item' onClick={() => navigate('/account')}>
                        <AccountCircleOutlinedIcon />
                        <span className="text">Учётная запись</span>
                    </div>
                </li>
                <li>
                    <div className='nav-item' onClick={() => navigate('/settings')}>
                        <SettingsOutlinedIcon />
                        <span className="text">Настройки</span>
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default Sidebar;