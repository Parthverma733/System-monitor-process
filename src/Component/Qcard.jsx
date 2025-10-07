import React from 'react'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { MdErrorOutline } from "react-icons/md";

const Qcard = (props) => {
  return (
    <div className='flex flex-col md:flex-row gap-8 mb-9'>
    <div className='flex-1 bg-rose-900/20 p-5 border rounded-xl border-rose-600'>

      <div className='flex justify-between'>
          <div className='text-2xl text-rose-600 pb-3'>
        <MdErrorOutline/>
          </div>
          <h1 className='text-rose-600 text-xl font-bold'>
            4
          </h1>
      </div>
      
      
      <h1 className='font-bold text-white '>System Queue</h1>
      <p className='font-mono text-xs text-gray-500 border-b pb-3'>Round Robin</p>
      
      <h2 className='pt-2 text-gray-400 text-xs'>
          Critical system processes with highest priority. Can interrupt any lower priority process.
      </h2>
    </div>

    <div className='flex-1 bg-sky-900/30 p-5 border rounded-xl border-sky-500'>

    <div className='flex justify-between'>
          <div className='text-2xl text-sky-500 pb-3'>
          <AiOutlineThunderbolt/>
          </div>
          <h1 className='text-sky-500 text-xl font-bold'>
            10
          </h1>
    </div>
  
      
      <h1 className='font-bold text-white '>Interactive Queue</h1>
      <p className='font-mono text-xs text-gray-500 border-b pb-3'>Priority Scheduling</p>
      
    <h2 className='pt-2 text-gray-400 text-xs'>
          User-facing applications requiring quick response times. Time-sliced execution.
      </h2>
    </div>

    <div className='flex-1 bg-purple-900/20 p-5 border rounded-xl border-purple-600'>


      <div className='flex justify-between'>
          <div className='text-2xl text-purple-600 pb-3'>
          <BsBoxSeam />
          </div>

          <h1 className='text-purple-600 text-xl font-bold'>
            25
          </h1>
      </div>

      
      
      <h1 className='font-bold text-white '>Background Queue</h1>
      <p className='font-mono text-xs text-gray-500 border-b pb-3'>FCFS</p>
      
      <h2 className='pt-2 text-gray-400 text-xs'>
          Background tasks and CPU-intensive operations. First-come, first-served scheduling.
      </h2>

      
    </div>
    </div>    
  )
}

export default Qcard