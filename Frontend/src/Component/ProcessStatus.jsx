import React from 'react'

const ProcessStatus = () => {
  return (
    <div className='text-white border p-2 rounded-xl border-gray-800 mb-7'>
      <h1 className='font-bold ml-3 mb-2'>
          Process Status Legend
      </h1>
      
      <div className='flex ml-3 gap-4 mb-3'>
          <div className='flex gap-3 items-center'> 
        <h1 className='bg-green-500 text-black p-1 w-fit h-fit px-3 rounded-2xl font-semibold'> NEW</h1>
        <h1 className='text-gray-400 text-sm'>Just created</h1>
      </div>
      <div className='flex gap-3 items-center'> 
        <h1 className='bg-sky-400 text-black p-1 w-fit h-fit px-3 rounded-2xl font-semibold'> RUNNING</h1>
        <h1 className='text-gray-400 text-sm'>Currently executing</h1>
      </div>
      <div className='flex gap-3 items-center'> 
        <h1 className='bg-yellow-500 text-black p-1 w-fit h-fit px-3 rounded-2xl font-semibold'> WAITING</h1>
        <h1 className='text-gray-400 text-sm'>In ready queue</h1>
      </div>
      <div className='flex gap-3 items-center'> 
        <h1 className='bg-pink-600 text-white p-1 w-fit h-fit px-3 rounded-2xl font-semibold'> TERMINATED</h1>
        <h1 className='text-gray-400 text-sm'>Finished execution</h1>
      </div>
      </div>
      
      </div>
  )
}

export default ProcessStatus