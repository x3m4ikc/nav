// import { Line } from "react-chartjs-2";
// import { faker } from "@faker-js/faker";

// const labels = ['Junuary', 'February', 'March', 'April', 'May', 'June', 'July'];

// const data = {
//     labels,
//     datasets: [
//         {
//             fill: true,
//             label: 'Dataset 2',
//             data: labels.map(() => 
//                 faker.datatype.number({min: 0, max: 1000}),),
//             borderColor: 'rgb(53, 162, 235)',
//             backgroundColor: 'rgba(53, 162, 235, 0.5)',
//         },
//     ],
// }

// const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//             position: 'top',
//         },
//         title: {
//             display: true,
//             text: 'Датчик 1'
//         },
//     },
// }


// const AreaChartComponent = () => {
//     return <Line options={options} data={data}/>
//     // return <Line />
// }

// // AreaChart - temp first

// export default AreaChartComponent;

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
    responsive: true,
    scales: {
        x: {
            grid: {
                display: false,
                background: '#FFFF',
            }
        }
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Датчик №1',
      },
    },
  };
  
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.number.float({ min: 5, max: 40 })
        ),
        fill: 'start',
        borderWidth: 1,
        backgroundColor: (context) => {
            const ctx = context.chart.ctx
            const gradient = ctx.createLinearGradient(0, 0, 0, 180)
            gradient.addColorStop(0, '#C1EF00')
            gradient.addColorStop(1, '#232323')
            return gradient
        },       
      },
    ],
  };

const AreaChartComponent = () => {
    return (
        <Line options={options} data={data} width={300} height={150}/>
    )
}

export default AreaChartComponent;