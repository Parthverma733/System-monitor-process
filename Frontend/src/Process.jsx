import React from 'react';
import Blocks from './Component/Blocks';
import ProcessStatus from './Component/ProcessStatus';


const Process = ({processes,system}) => {

  return (
    <div className='bg-slate-950 p-5 m-0 items-center'>

        <div className="font-sans">
      <h1 className="text-2xl font-semibold  text-white">
        Process Management
      </h1>
      <p className='pb-5 text-gray-400 font-mono'>
        Complete list of all processes in the system
      </p>

      <Blocks  system={system}/>


      <ProcessStatus />      


      <div className=" border border-gray-700 rounded-xl">
        <table className="min-w-full text-sm bg-slate-900 rounded-xl font-mono">
          <thead className="text-gray-500 ">
            <tr className='border-b border-gray-300 rounded-xl'>
              <th className="px-4 py-2 text-left">PID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">CPU %</th>
              <th className="px-4 py-2 text-left">Memory %</th>
              <th className="px-4 py-2 text-left">Status</th>
              {/* <th className="px-4 py-2 text-left">Priority</th>
              <th className="px-4 py-2 text-left">Class</th> */}
              <th className="px-4 py-2 text-left">User</th>
            </tr>
          </thead>
          <tbody>
            {processes.length > 0 ? (
              processes.map((proc) => (
                <tr
                  key={proc.pid}
                  className='text-white shadow-[0_0_10px_rgba(37,99,235,0.6)]' rounded-b-xl
                >
                  <td className="px-4 py-2">{proc.pid}</td>
                  <td className="px-4 py-2">{proc.name}</td>
                  <td className="px-4 py-2 text-sky-500/100 font-bold">{proc.cpu_percent}</td>
                  <td className="px-4 py-2 text-pink-600 font-bold">
                    {proc.memory_percent.toFixed(2)}
                  </td>
                  <td className="px-4 py-2">{proc.status}</td>
                  {/* <td className="px-4 py-2">
                    {proc.priority}
                  </td>
                  <td className="px-4 py-2">
                    {proc.type}
                  </td> */}
                  <td className="px-4 py-2">{proc.username}</td>
                </tr>
              ))
            ) : (
              <tr className='shadow-[0_0_10px_rgba(37,99,235,0.6)] rounded-b-xl'>
                <td
                  colSpan="6"
                  className="text-center text-gray-500 py-4 italic"
                >
                  Fetching process data...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

    

    </div>

  );
};

export default Process;
