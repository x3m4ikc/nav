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
import axios from 'axios';
  
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

let graph_data = NaN

const getSensorsData = async () => {
    const date1 = new Date(2024, 1, 20).getTime();
    const date2 = new Date(2024, 1, 20, 23, 59, 59).getTime();

    axios.get('http://192.168.192.110:5005/db/temperatures/1', 
    {params: {'start': date1/1000, 'end': date2/1000}}).then(values => {

      graph_data = Object.values(values.data.result).map(item => item.value);
      console.log("func: getSensorsData")
      console.log(graph_data);
      return graph_data;
    })
  }

const AreaChartComponent = (props) => {

  

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  const tagPeriodSwitcher = async (event) => {
    const id = event.target.getAttribute("data-period");
    const data = await getSensorsData();
    console.log(graph_data + " in TagSwitcher");
    console.log(id);
    document.querySelector('.period-time').innerText = event.target.textContent;
  }

  const generateRandomData = (count) => {
    const data = []
    for (let i = 0; i < count; i++) {
      data.push(faker.number.float({ min: 15, max: 35 }))
    }
    return data;
  }

  const options = {
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

  const data = {
    labels: Array.from({length: 125}, (_, i) => i),
    datasets: [
      {
        label: 'Dataset 2',
        lineTension: 0.7,
        // data: graph_data,
        data: generateRandomData(315),
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
 
    return (
      <div className='container-graph'>
        <div className='topbar-graph'>
        <div className='number-cur'>
          <span className='number-and-sensor'>{props.name}</span>
          <div className='num-container'>
            <p className='cur-temp'>23.9°С</p>
            <span className='number-sensor'>(-0.1°С)</span>
          </div>
        </div>
          <div className='time-switch' onClick={handleOpen}>
            {open ? <div className={`dropmenu ${open ? 'active-but' : ''}`}>
                <ul className="dropmenu__list">
                    <li className="dropmenu__item" onClick={tagPeriodSwitcher} data-period='1'>Сутки</li>
                    <li className="dropmenu__item" onClick={tagPeriodSwitcher} data-period='2'>Неделя</li>
                    <li className="dropmenu__item" onClick={tagPeriodSwitcher} data-period='3'>Месяц</li>
                    <li className="dropmenu__item" onClick={tagPeriodSwitcher} data-period='4'>Год</li>
                    <li className="dropmenu__item" onClick={tagPeriodSwitcher} data-period='5'>Период</li>
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