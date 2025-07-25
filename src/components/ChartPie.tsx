// components/ChartPie.tsx
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Total Order', value: 75 },
  { name: 'Total Refunded', value: 65 },
  { name: 'Customer Growth', value: 10 },
  { name: 'Total Revenue', value: 320 },
];

const COLORS = ['#EF4444', '#22C55E', '#3B82F6',"#F59E0B"];

export default function ChartPie() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full">
      <h2 className="text-lg font-semibold mb-2">Growth Stats</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Tooltip />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
