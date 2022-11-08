import {
  AreaChart as Ac,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaChart = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <Ac data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis dataKey={"date"} />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area
          type={"monotone"}
          dataKey={"count"}
          stroke="#1e3a8a"
          fill="#3b82f6"
        />
      </Ac>
    </ResponsiveContainer>
  );
};

export default AreaChart;
