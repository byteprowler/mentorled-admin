// components/ChartRevenue.tsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', thisYear: 400, lastYear: 240 },
  { name: 'Feb', thisYear: 700, lastYear: 320 },
  { name: 'Mar', thisYear: 600, lastYear: 800 },
  { name: 'Apr', thisYear: 800, lastYear: 540 },
  { name: 'May', thisYear: 650, lastYear: 440 },
  { name: 'Jun', thisYear: 900, lastYear: 620 },
];

export default function ChartRevenue() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <h2 className="text-lg font-semibold mb-2">Total Revenue</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="thisYear"
            stroke="#3B82F6"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="lastYear"
            stroke="#EF4444"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}