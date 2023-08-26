import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { GetDateWiseCases } from '../../utils/apiPath';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
  const [chartData, setChartData] = useState({});
  const res = GetDateWiseCases();
  console.log(res);

  useEffect(() => {
    const fetchData = () => {
      try {
        //const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        const historicalData = res;
        console.log(historicalData);

        const dates = Object.keys(historicalData.cases);
        const cases = Object.values(historicalData.cases);
        const deaths = Object.values(historicalData.deaths);
        const recovered = Object.values(historicalData.recovered);

        setChartData({
          labels: dates,
          datasets: [
            {
              label: 'Cases',
              data: cases,
              fill: false,
              borderColor: '#7DD3FC',
            },
            {
              label: 'Deaths',
              data: deaths,
              fill: false,
              borderColor: 'red',
            },
            {
              label: 'Recovered',
              data: recovered,
              fill: false,
              borderColor: 'green',
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [res]);
  console.log(chartData);
  return (
    <div className='text-center'>
      <h2 className='text-xl font-bold underline underline-offset-4 mb-2'>COVID-19 Historical Data</h2>
      {Object.keys(chartData).length === 0 ? "No Data Found" : <Line className='mb-7' data={chartData} />} {/* Render the chart only when data is available */}
    </div>
  );
};

export default LineGraph
