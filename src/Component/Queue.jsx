import React, { useState } from 'react'
import Qcard from './Qcard'

const Queue = () => {
  return (

    <div className='mb-9 px-4 sm:px-6 md:px-10 mt-5'>

        <h1 className='font-bold text-lg sm:text-xl text-white mb-2'>CPU Queues</h1>
        <p className='font-mono text-sm text-gray-500 font-semibold mb-8'>Multi-level queue organization and scheduling visualization</p>

        <Qcard/>
        <div className='bg-slate-900 p-4 sm:p-6 text-white rounded-xl border border-gray-800 border-2'>
        <h1 className='font-bold text-xl'>MLQ 
        Scheduling Workflow</h1>
        <p className='text-xs font-mono text-gray-400 pt-2'>Processes execute in strict priority order: System → Interactive → Batch</p>

        <div className='flex justify-center'> 

          <div className='text-center bg-sky-900/70 w-fit px-4 sm:px-6 py-2 border rounded-xl border-sky-400 shadow-[0_0_20px_rgba(37,99,235,0.6)] mt-3'>
          <h1 className='font-semibold text-sm'>CPU Scheduler</h1>
          <h2 className='text-xs font-mono text-gray-400'>MLQ Algorithm</h2>
          </div>
        </div>

            <div className='bg-rose-950/25 p-3 mt-8 rounded-xl border border-rose-900 border-[2px] shadow-[0_0_5px_rgba(255,0,0,0.6)]'>
              <h1 className='font-semibold text-sm pb-2'>System Queue</h1>
              <p className='font-mono text-xs text-gray-400 border-t-[1px] pt-2 border-gray-500'>Round Robin | Highest Priority</p>
            </div>

            <div className='bg-sky-900/30 p-3 mt-8 border rounded-xl border-sky-400 shadow-[0_0_5px_rgba(37,99,235,0.6)]'>
              <h1 className='font-semibold text-sm pb-2'>Interactive Queue</h1>
              <p className='font-mono text-xs text-gray-400 border-t-[1px] pt-2 border-gray-500'>Priority Scheduling | Medium Priority</p>
            </div>

            <div className='bg-purple-900/20 p-3 mt-8 rounded-xl border border-purple-900 border-[2px] shadow-[0_0_5px_rgba(128,0,128,0.6)]'>
              <h1 className='font-semibold text-sm pb-2'>Background  Queue</h1>
              <p className='font-mono text-xs text-gray-400 border-t-[1px] pt-2 border-gray-500'>FCFS | Lowest Priority</p>
            </div>

            <div className='font-mono p-3 bg-slate-800 rounded-xl border border-gray-600 mt-4 '>
              <h1 className='text-sky-400 text-sm'>Execution Rules</h1>
              <div className='text-xs text-gray-400'>
              <p>• Higher priority queues always execute first</p>
              <p>• Process from lower queue only runs when higher queues are empty</p>
              <p>• New processes can interrupt lower priority execution</p>
              <p>• CPU-intensive processes may be demoted to batch queue</p>
              <p>• I/O-bound processes promoted to interactive queue</p>
              </div>
              
            </div>

    </div>
    </div>
      
  )
}

export default Queue