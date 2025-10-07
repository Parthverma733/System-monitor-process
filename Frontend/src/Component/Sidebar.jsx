import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="flex flex-col bg-gray-950
    min-w-60 text-blue-400  min-h-screen border-r border-gray-700 ">

      <div className="p-5 border-b border-gray-700 text-center">
        <h2 className="text-xl font-bold text-white tracking-wide drop-shadow-[0_0_8px_rgba(37,99,235,0.7)]">
          TASK MANAGER
        </h2>
        <p className="text-xs text-blue-300 font-mono mt-1 opacity-80">System Monitor</p>
      </div>
      <nav className="flex flex-col flex-1 p-4 space-y-3 text-xl">
        <NavLink
  to="/"
  end
  className={({ isActive }) =>
    `block p-3 rounded-md font-medium transition-all duration-300 text-sky-300 
    ${
      isActive
        ? "bg-sky-600/20 border border-sky-500 text-sky-400 shadow-[0_0_10px_rgba(14,165,233,0.6)]"
        : "hover:bg-sky-600/10 hover:text-sky-400 hover:shadow-[0_0_6px_rgba(14,165,233,0.5)]"
    }`
  }
>
  All Processes
</NavLink>

<NavLink
  to="/Queue"
  className={({ isActive }) =>
    `block p-3 rounded-md font-medium transition-all duration-300 text-sky-300 
    ${
      isActive
        ? "bg-sky-600/20 border border-sky-500 text-sky-400 shadow-[0_0_10px_rgba(14,165,233,0.6)]"
        : "hover:bg-sky-600/10 hover:text-sky-400 hover:shadow-[0_0_6px_rgba(14,165,233,0.5)]"
    }`
  }
>
  Queues
</NavLink>

<NavLink
  to="/mlq"
  className={({ isActive }) =>
    `block p-3 rounded-md font-medium transition-all duration-300 text-sky-300 
    ${
      isActive
        ? "bg-sky-600/20 border border-sky-500 text-sky-400 shadow-[0_0_10px_rgba(14,165,233,0.6)]"
        : "hover:bg-sky-600/10 hover:text-sky-400 hover:shadow-[0_0_6px_rgba(14,165,233,0.5)]"
    }`
  }
>
  Category
</NavLink>



      </nav>

      <footer className="border-t border-blue-800 p-4 text-center text-xs text-blue-300 font-mono opacity-80">
        <p>Real-Time Monitoring</p>
      </footer>
    </aside>
  );
};

export default Sidebar;
