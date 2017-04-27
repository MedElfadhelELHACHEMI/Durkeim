/**
*
* Chart
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Line, Pie } from 'react-chartjs-2';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Chart extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const data1 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
          spanGaps: false,
        },
        {
          label: 'My second dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,255,192,0.4)',
          borderColor: 'rgba(75,255,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,255,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 0.5,
          pointHitRadius: 10,
          data: [40, 30, 80, 90, 56, 78, 40],
          spanGaps: false,
        },
      ],
    };
    const data2 = {
      labels: [
        'Red',
        'Blue',
        'Yellow',
      ],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ],
        }],
    };

    return (
      <div>
        <Line data={data1} />
        <Pie data={data2} />
      </div>
    );
  }
}

Chart.propTypes = {

};

export default Chart;
