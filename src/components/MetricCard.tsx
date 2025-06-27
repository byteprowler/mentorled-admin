// components/MetricCard.tsx
interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  bgColor?: string;
}

export default function MetricCard({
  title,
  value,
  icon,
  bgColor = 'bg-indigo-100',
}: MetricCardProps) {
  return (
    <div className={`rounded-lg p-4 ${bgColor} shadow-sm`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-600">{title}</p>
          <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
        </div>
        {icon && <div className="text-3xl text-indigo-600">{icon}</div>}
      </div>
    </div>
  );
}
