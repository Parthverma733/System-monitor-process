import React from 'react'
import { IoMdClose } from "react-icons/io";
import { FaMicrochip, FaMemory } from "react-icons/fa";
import { CiWavePulse1 } from "react-icons/ci";

const Header = ({ system }) => {
  const cpuUsage = Math.min(Math.max(system.avg_cpu_usage || 0, 0), 100);
  const memUsage = Math.min(Math.max(system.avg_memory_usage || 0, 0), 100);

  return (
    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-6 py-4 bg-slate-900/40 backdrop-blur-sm border-b border-slate-700 m-0 pb-5'>

      <div className='flex items-center'>
        <div className="text-6xl pr-4 text-sky-400 hover:text-white">
          <CiWavePulse1 />
        </div>
        <div className='text-white'>
          <h1
            className="text-2xl font-bold text-white"
            style={{ textShadow: '0 0 0px white, 0 0 0px white, 0 0 7px white' }}
          >
            Real-Time Task Manager
          </h1>
          <p className='text-xs text-gray-400 font-mono'>Multi-Level Queue Scheduler</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row text-white md:items-center md:justify-between gap-8 px-6 py-4 m-0 pb-5">

        <div className="flex flex-col items-start">
          <div className="flex items-center gap-20 mb-1">
            <div className='flex items-center gap-2'>
              <FaMicrochip className="text-cyan-400" />
              <span className="font-semibold">CPU Usage</span>
            </div>
            <span className="font-mono text-cyan-300">
              {cpuUsage.toFixed(1)}%
            </span>
          </div>
          <div className="w-56 h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1] transition-all duration-500 ease-in-out"
              style={{ width: `${cpuUsage}%` }}
            ></div>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex items-center gap-12 mb-1">
            <div className='flex items-center gap-2'>
              <FaMemory className="text-pink-400" />
              <span className="font-semibold">Memory Usage</span>
            </div>
            <span className="font-mono text-pink-500">
              {memUsage.toFixed(1)}%
            </span>
          </div>
          <div className="w-56 h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1] transition-all duration-500 ease-in-out"
              style={{ width: `${memUsage}%` }}
            ></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
