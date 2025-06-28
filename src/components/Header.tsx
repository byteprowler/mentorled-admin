import { FiBell } from "react-icons/fi";
import Input from './Input';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg mb-4 shadow-sm">
      <Input />

      <div className="flex items-center gap-4 ml-8 justify-between">
        <div className="relative cursor-pointer">
          <FiBell className="text-2xl text-slate-700" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </div>

        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-indigo-500">
          <Image
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Profile"
            width={40}
            height={60}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
