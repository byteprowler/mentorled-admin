import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaSignOutAlt
 } from "react-icons/fa";
import {
  FiTag,
  FiHome,
  FiUsers,
  FiMonitor,
  FiBarChart,
  FiDollarSign,
  FiShoppingCart,
  FiChevronsRight,
  FiCoffee,
} from 'react-icons/fi';
import { CiBoxList } from 'react-icons/ci';
import { IoSettingsOutline } from "react-icons/io5";
import { useRouter } from 'next/router';

interface TProps {
  close: boolean;
}

const TitleSection: React.FC<TProps> = ({ close }) => {
    return (
      <div className="mb-3 border-b border-slate-300 pb-3">
        <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
          <div className="flex p-1 items-center gap-2">
            {close && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}
              >
                <span className="text-2xl font-extrabold items-center p-4">ByteCorp</span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    );
  };

  interface OProps {
    title: string;
    notifs?: number;
    open: boolean;
    active?: string;
    inActive?: (title: string) => void;
    Icon?: React.FC;
    href?: string;
    onClick?: () => void;
  }

const Option: React.FC<OProps> = ({ Icon, title, inActive, open, notifs, href, onClick, active }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <motion.a href={href && !onClick ? href : undefined}>
      <motion.button
        layout
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
          if(inActive) {
            inActive(title);
          }
        }}
        className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
          pathname === href || (inActive && title === active)
            ? 'bg-indigo-100 text-indigo-800'
            : 'text-slate-500 hover:bg-slate-100'}
         ${ onClick ? "cursor-pointer" : "" }}`}
      >
        <motion.div layout className="grid h-full w-10 place-content-center text-lg">
          {Icon && <Icon />}
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-md font-medium"
          >
            {title}
          </motion.span>
        )}
        {notifs && open && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ y: '-50%' }}
            className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
          >
            {notifs}
          </motion.span>
        )}
      </motion.button>
    </motion.a>
  );
};

const ToggleClose = ({ open, setOpen }: resProps) => (
  <div className="flex">
  <motion.button
    layout
    onClick={() => setOpen((prev) => !prev)}
    className="fixed bg-indigo-500 bottom-2 left-4 z-[100] rounded-lg bg-white-600 p-2 text-white hover:shadow-lg sm:bottom-3 sm:left-3"
    >
     <div className="flex items-center p-2">
        <motion.div layout className="grid size-10 place-content-center text-lg">
          <FiChevronsRight className={`transition-transform ${open && 'rotate-180'}`} />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-md font-medium text-center"
          >
            Hide
          </motion.span>
        )}
      </div>
  </motion.button>
    </div>
);

interface resProps {
  open: boolean;
  setOpen: (open: boolean | ((open: boolean) => boolean)) => void;
}


const ResponsiveNav = ({ open, setOpen }: resProps) => {
  const [active, setActive] = useState('');
  const logout = async () => {
    await router.push('/');
  };
  
  const router = useRouter();



  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setOpen(false)}
        ></div>
      )}
      {/* Responsive Navbar */}
      <motion.aside
        layout
        className={`fixed top-0 z-50 h-screen bg-white border-r border-slate-300 transition-transform 
          ${open ? 'translate-x-0' : '-translate-x-full'}
          sm:w-[225px] w-[250px]`}
      >
        <div className="mb-3 border-b border-slate-300 pb-3">
          <div className="flex cursor-pointer items-center justify-between rounded-md">
            <div className="flex items-center gap-2">
              {open && (
                <span className="text-2xl font-extrabold">ByteCorp</span>
              )}
            </div>
          </div>
        </div>
        <div className="space-y-1">
        <Option
          Icon={FiHome}
          title="Dashboard"
          active={active}
          inActive={setActive}
          open={open}
          href="/"
        />
        <Option
          Icon={FiDollarSign}
          title="Order List"
          active={active}
          inActive={setActive}
          open={open}
          notifs={3}
          href="/"
        />
        <Option
          Icon={FiMonitor}
          title="Order details"
          active={active}
          inActive={setActive}
          open={open}
          href="/"
        />
        <Option
          Icon={FiShoppingCart}
          title="Customers"
          active={active}
          inActive={setActive}
          open={open}
          href="/"
        />
        <Option
            Icon={FiBarChart}
            title="Analytics"
            active={active}
            inActive={setActive}
            open={open}
            href="/analytics"
          />
        <Option
          Icon={CiBoxList}
          title="Calender"
          active={active}
          inActive={setActive}
          open={open}
          href="/"
        />
        <Option
          Icon={FiTag}
          title="Reviews"
          active={active}
          inActive={setActive}
          open={open}
          href="/"
        />
        <Option
          Icon={FiCoffee}
          title="Foods"
          active={active}
          inActive={setActive}
          open={open}
          href="/"
        />
        <Option
          Icon={FiUsers}
          title="Food Details"
          active={active}
          inActive={setActive}
          open={open}
          href="/"
        />
        <Option
          Icon={FiUsers}
          title="Customer Details"
          active={active}
          inActive={setActive}
          open={open}
          href="/"
        />
        <Option
          Icon={FiCoffee}
          title="Chat"
          active={active}
          inActive={setActive}
          open={open}
          href="/"
        />
        <Option
          Icon={FaSignOutAlt}
          title="Wallet"
          onClick={logout}
          active={active}
          inActive={setActive}
          open={open}
        />
        </div>
      </motion.aside>
      <ToggleClose open={open} setOpen={setOpen} />
    </>
  );
};

interface tgProps {
  close: boolean;
  setClose: (close: boolean | ((close: boolean) => boolean)) => void;
}

const ToggleClose2: React.FC<tgProps> = ({ close, setClose }) => {
  return (
    <motion.button
      layout
      onClick={() => setClose((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="flex items-center p-2">
        <motion.div layout className="grid size-10 place-content-center text-lg">
          <FiChevronsRight className={`transition-transform ${close && 'rotate-180'}`} />
        </motion.div>
        {close && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium text-center"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

interface OProps2 {
  title: string;
  notifs?: number;
  close: boolean;
  active?: string;
  inActive?: (title: string) => void;
  Icon?: React.FC;
  href?: string;
  onClick?: () => void;
}

const Option2: React.FC<OProps2> = ({ Icon, title, inActive, close, notifs, href, onClick, active }) => {
const router = useRouter();
const { pathname } = router;

return (
  <motion.a href={href && !onClick ? href : undefined}>
    <motion.button
      layout
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
        if(inActive) {
          inActive(title);
        }
      }}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
        pathname === href || (inActive && title === active)
          ? 'bg-indigo-100 text-indigo-800'
          : 'text-slate-500 hover:bg-slate-100'}
       ${ onClick ? "cursor-pointer" : "" }}`}
    >
      <motion.div layout className="grid h-full w-10 place-content-center text-lg">
        {Icon && <Icon />}
      </motion.div>
      {close && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-md font-medium"
        >
          {title}
        </motion.span>
      )}
      {notifs && close && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ y: '-50%' }}
          className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
        >
          {notifs}
        </motion.span>
      )}
    </motion.button>
  </motion.a>
);
};

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);
  const [active, setActive] = useState('');
  const logout = async () => {
    await router.push('/');
  };
  
  const router = useRouter();

  return (
    <>
      <div className="hidden lg:block">
        <motion.aside 
        layout
        className="sticky top-0 h-screen bg-white border-r border-slate-300"
        style={{
          width: close ? '225px' : 'fit-content'
        }}>
         <TitleSection close={close} />
          <div className="space-y-1 px-4">
          <Option2
          Icon={FiHome}
          title="Dashboard"
          active={active}
          inActive={setActive}
          close={close}
          href="/"
        />
        <Option2
          Icon={FiDollarSign}
          title="Order List"
          active={active}
          inActive={setActive}
          close={close}
          notifs={3}
          href="/sales"
        />
        <Option2
          Icon={FiMonitor}
          title="Order Details"
          active={active}
          inActive={setActive}
          close={close}
          href="/order"
        />
        <Option2
          Icon={FiShoppingCart}
          title="Customer"
          active={active}
          inActive={setActive}
          close={close}
          href="/products"
        />
        <Option2
          Icon={CiBoxList}
          title="Analytics"
          active={active}
          inActive={setActive}
          close={close}
          href="/analytics"
        />
        <Option2
          Icon={FiTag}
          title="Reviews"
          active={active}
          inActive={setActive}
          close={close}
          href="/review"
        />
        <Option2
          Icon={FiBarChart}
          title="Food"
          active={active}
          inActive={setActive}
          close={close}
          href="/food"
        />
        <Option2
          Icon={FiUsers}
          title="Food Details"
          active={active}
          inActive={setActive}
          close={close}
          href="/food-details"
        />
        <Option2
          Icon={FiCoffee}
          title="Customer Details"
          active={active}
          inActive={setActive}
          close={close}
          href="/supports"
        />
        <Option2
          Icon={IoSettingsOutline}
          title="Calender"
          active={active}
          inActive={setActive}
          close={close}
          href="/settings"
        />
        <Option2
          Icon={FaSignOutAlt}
          title="Logout"
          onClick={logout}
          close={close}
        />
            <ToggleClose2 close={close} setClose={setClose} />
          </div>
        </motion.aside>
      </div>
      <div className="block lg:hidden">
        <ResponsiveNav open={open} setOpen={setOpen} />
      </div>
    </>
  );
}