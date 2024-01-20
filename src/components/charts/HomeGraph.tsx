import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sun',
    Tasks: 0,
    amt: 2400,
  },
  {
    name: 'Mon',
    Tasks: 3,
    amt: 2210,
  },
  {
    name: 'Tue',
    Tasks: 1,
    amt: 2290,
  },
  {
    name: 'Wed',
    Tasks: 4,
    amt: 2000,
  },
  {
    name: 'Thur',
    Tasks: 2,
    amt: 2181,
  },
  {
    name: 'Fri',
    Tasks: 1,
    amt: 2500,
  },
  {
    name: 'Sat',
    Tasks: 2,
    amt: 2100,
  },
];

export default class HomeGraph extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="80%" className={`flex`}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: -28,
            bottom: -5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill:'darkgray'}}/>
          <YAxis tick={{ fontSize: 12, fill:'darkgray'}}/>
          <Tooltip />
          <Legend className='text-[.8em] font-barlow'/>
          <Line type="monotone" dataKey="Tasks" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
