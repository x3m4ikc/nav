import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from "@faker-js/faker";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import './ChartComponent.css';
import { useState } from 'react';
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
export const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        color: '#46F357',
        x: {
            grid: {
                display: false,
            },
            ticks: {
              color: '#60876F',
            }
        },
        y: {
          border:{dash: [3, 3]},
          grid: {
            tickColor: '',
            display: true,
            color: '#60876F',
          },
          ticks: {
            color: '#60876F',
          }
        }
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };
  
const labels = ['Фев 06', 'Фев 07', 'Фев 08', 'Фев 09', 'Фев 10', 'Фев 11', 'Фев 12'];
  
export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.number.float({ min: 15, max: 35 })
        ),
        fill: 'start',
        borderWidth: 1,
        borderColor: '#6fff8c',
        backgroundColor: (context) => {
            const ctx = context.chart.ctx
            const gradient = ctx.createLinearGradient(0, 0, 0, 180)
            gradient.addColorStop(0, 'rgba(70, 243, 87, 0.50)')
            gradient.addColorStop(1, 'rgba(175, 255, 183, 0)')
            return gradient
        },
             
      },
    ],
  };

const AreaChartComponent = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }
 
    return (
      <div className='container-graph'>
        <div className='topbar-graph'>
        <div className='number-cur'>
          <span className='number-and-sensor'>Датчик №1</span>
          <div className='num-container'>
            <p className='cur-temp'>23.9°С</p>
            <span className='number-sensor'>(-0.1°С)</span>
          </div>
        </div>
          <div className='time-switch' onClick={handleOpen}>
            {open ? <div className={`dropmenu ${open ? 'active-but' : ''}`}>
                <ul className="dropmenu__list">
                    <li className="dropmenu__item">Сутки</li>
                    <li className="dropmenu__item">Неделя</li>
                    <li className="dropmenu__item">Месяц</li>
                    <li className="dropmenu__item">Год</li>
                    <li className="dropmenu__item">Период</li>
                </ul>

            </div> : <div></div>}
              <span className='period-time'>Неделя</span>
              <ExpandMoreOutlinedIcon className='expand-icon'/>
          </div>
        </div>
        <div style={{height: "125px"}}>
          <Line options={options} data={data} className='graph'/>
        </div>
      </div>
    )
}

export default AreaChartComponent;