import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { region: 'A', val: 4119626293 },
  { region: 'B', val: 3438212331 },
  { region: 'C', val: 4119626293 },
  { region: 'D', val: 590946440 },
  { region: 'E', val: 129626293 },
  { region: 'F', val: 1232304756 },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="val"
            argumentField="region"
            innerRadius={0.6}
          />
          
          <Animation />
        </Chart>
      </Paper>
    );
  }
}