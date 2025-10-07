import React from 'react'

const Blocks = ({system}) => {
  
  return (
    <div className='flex pt-2 pb-7 gap-4 '>
      <div className='flex-1 bg-sky-900/30 py-4 px-4 rounded-xl border border-sky-800 border-[2px] '>
        <h1 className='text-sm text-gray-400'>Total Process</h1>
        <h1 className='text-3xl font-bold text-sky-400 font-mono pt-2'>4</h1>
      </div>
      <div className='flex-1 bg-rose-900/20 py-4 px-4 rounded-xl border border-rose-800 border-[2px]'>
        <h1 className='text-sm text-gray-400'>
          Running
        </h1>
        <h1 className='text-3xl pt-2 font-bold text-rose-500 font-mono '>3</h1>
      </div>
      <div className='flex-1 bg-green-900/20 py-4 px-4 rounded-xl border border-green-600 border-[2px]' >
        <h1 className='text-sm text-gray-400'>
          Avg CPU Usage
        </h1>
        <h1 className='text-3xl pt-2 font-bold text-green-400 font-mono '>{system.avg_cpu_usage}%</h1>
      </div>
      <div className='flex-1 bg-yellow-900/30 py-4 px-4 rounded-xl border border-yellow-600 border-[2px]'><h1 className='text-sm text-gray-400'>
          Avg Memory
        </h1>
        <h1 className='text-3xl pt-2 font-bold  font-mono text-orange-400'>{system.avg_memory_usage}%</h1></div>
    </div>
  )
}

export default Blocks