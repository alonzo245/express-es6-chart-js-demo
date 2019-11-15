import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import moment from 'moment'
import GraphOptions from './GraphOptions'
import GraphDatasets from './GraphDatasets'
import Loader from '../Loader/Loader'
import './Graph.css';

const Graph = () => {
  const [graphData, setGraphData] = useState(null);
  const [graphOptionsTitle, setGraphOptionsTitle] = useState({});

  useEffect(() => {
    axios.get('/api/v1/weather/mock')
    .then(res => {
      let title = '';
      let windSpeedList = res.data.map(item => !item.rain.value ? 0 : item.rain.value)
      const MaxSpeedValue = Math.max.apply(null, windSpeedList)
      let windSpeedDotsColor = res.data.map(item => {
        
        if(item.rain.value === MaxSpeedValue){
          title = `Rainiest Time is at ${moment.utc(item.sample_date.value).format('HH:mma')}`;
          return 'rgb(255, 0, 0)'; //red
        }
        return 'rgba(75,192,192,1)'; //turquoise
      })

      let labels = res.data.map(item =>  {
        if(item.rain.value > 0) return moment.utc(item.sample_date.value).format('HH:mm')
        return `${moment.utc(item.sample_date.value).format('HH:mm')} N/A`
      })
      
      setGraphOptionsTitle({
        title: {
          display: true,
          text: title
        },
      })

      setGraphData({
        labels,
        datasets: [
          {
            ...GraphDatasets,
            label: 'Rain Quantity',
            data: windSpeedList,
            pointBorderColor: windSpeedDotsColor,
          }
        ]
      });
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

  if(!graphData) return <Loader />
  return <Line data={graphData} width={500} height={350} options={{GraphOptions, ...graphOptionsTitle}} />
}

export default Graph;
