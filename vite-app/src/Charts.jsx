import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const Charts = (props) => {
  return (
    <LineChart
      width={1000}
      height={500}
      data={props.data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey={props.lineDataKey} stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default Charts;
