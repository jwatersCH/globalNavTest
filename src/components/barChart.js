import React from 'react';
import { Chart } from 'react-google-charts';

import styles from '../sass/barChart.scss';

var data = [
    ['City', '2010 Population', '2000 Population'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000]
];

var options = {
    chart: {
        title: 'Population of Largest U.S. Cities',
        subtitle: 'Based on most recent and previous census data',
    },
    title: 'This here is a chart',
    forcelFrame: true,
    fontName: 'open sans',
    pieHole: 0.4,
    titlePosition: 'none',
    titleTextStyle: {
      color: 'black',
      marginTop: '120px'
    },
    hAxis: {
      textPosition: 'in',
      gridlines: {count: 0}
    },
    legend: {position: 'none'},
    vAxis: {
      textPosition: 'none',
      gridlines: {}
    },  
    bars: 'horizontal',
    width: 900,
    chartArea: {
      backgroundColor: 'gray',
      left: 20,
      width: '50%',
      top: 30
    }
};

class BarChart extends React.Component{


  render(){
    return(
      <div>
      <div>
        <h4 style={{display: 'inline-block'}}>testing</h4>
        <Chart chartType="BarChart" data={data} options={options} />
      </div>
        <Chart chartType="PieChart" data={data} options={options} />
      </div>
  )
  }
}


export default BarChart;