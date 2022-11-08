import {
  BarChart as Bc,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChart = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <Bc
        data={data}
        margin={{
          top: 50,
          bottom:5
        }}
      >
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="count"    fill="#3b82f6" barSize={75} />
      </Bc>
    </ResponsiveContainer>
  );
};

export default BarChart;
