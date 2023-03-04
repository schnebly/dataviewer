import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Legend,
  Bar,
} from 'recharts';

const LineCharts = (props) => {
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
      <Legend />
    </LineChart>
  );
};

const BarCharts = (props) => {
  return (
    <BarChart width={1150} height={500} data={props.data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="basic_plastic" fill="#8884d8" />
      <Bar dataKey="premium_plastic" fill="#82ca9d" />
      <Bar dataKey="color_plastic" fill="#83a6ed" />
      <Bar dataKey="bronze" fill="#ffc658" />
    </BarChart>
  );
};

export { LineCharts, BarCharts };
