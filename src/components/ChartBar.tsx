import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Nigeria', value: 35, fill: '#22C55E' },
  { name: 'USA', value: 50, fill: '#3B82F6' },
  { name: 'India', value: 25, fill: '#6366F1' },
  { name: 'Germany', value: 20, fill: '#F59E0B' },
  { name: 'Ghana', value: 30, fill: '#EF4444' },
];

export default function ChartBar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <h2 className="text-lg font-semibold mb-2">Customer Map</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="fill" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
