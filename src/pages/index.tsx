import ChartLine from "@/components/ChartLine"
import ChartPie from "@/components/ChartPie";
import ChartRevenue from "@/components/ChartRevenue";
import ChartBar from "@/components/ChartBar";
import UserTable from "@/components/userTable";
import MetricCard from "@/components/MetricCard";
import Header from "@/components/Header";
import { FiShoppingCart, FiDollarSign } from "react-icons/fi";

export default function Index() {
  return (
    <>
    <div className="flex flex-col mb-4">
    <Header />
    <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
    <p className="text-sm">Hi, ByteCorp, here are your stats</p>
    </div>
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
      <MetricCard title="Total Orders" value={75} icon={<FiShoppingCart />} />
      <MetricCard title="Total Refunded" value={357} icon={<FiDollarSign />} />
      <MetricCard title="Total Canceled" value={65} icon={<FiShoppingCart />} />
      <MetricCard title="Total Revenue" value={`$128`} icon={<FiDollarSign />} />
    </div>
    <div className="">
      <ChartLine />
      <ChartRevenue />
    </div>
    <div className="grid gap-4 p-4 sm:grid-cols-1 lg:grid-cols-2">
      <ChartPie />
      <ChartBar />
    </div>
    <UserTable />
    </>
  );
}
