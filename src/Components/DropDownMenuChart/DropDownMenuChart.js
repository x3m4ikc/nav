import { useState } from "react"
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const DropDownMenuChart = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className="dropmenu-button" onClick={() => setOpen(!isOpen)}>
            <ExpandMoreOutlinedIcon/>
            <div className={`dropmenu ${isOpen ? 'active' : ''}`}>
                <ul className="dropmenu__list">
                    <li className="dropmenu__item">Сутки</li>
                    <li className="dropmenu__item">Неделя</li>
                    <li className="dropmenu__item">Месяц</li>
                    <li className="dropmenu__item">Год</li>
                    <li className="dropmenu__item">Период</li>
                </ul>

            </div>
        </div>
    )
}

export default DropDownMenuChart;