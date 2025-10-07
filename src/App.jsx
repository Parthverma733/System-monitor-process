import React, { useEffect, useState } from 'react'
import Sidebar from './Component/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Process from './Process'
import Header from './Component/Header'
import Queue from './Component/Queue'

const App = () => {

  const [system, setSystem] = useState({
    avg_cpu_usage: 0,
    avg_memory_usage: 0,
  });

  const [processes, setProcesses] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000/ws");

    socket.onopen = () => {
      console.log("✅ Connected to WebSocket");
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        // Update system usage
        setSystem({
          avg_cpu_usage: data.system.avg_cpu_usage,
          avg_memory_usage: data.system.avg_memory_usage,
        });

        // Update processes
        setProcesses(data.processes || []);
      } catch (err) {
        console.error("Error parsing WebSocket data:", err);
      }
    };

    socket.onclose = () => {
      console.log("❌ WebSocket disconnected");
    };

    return () => socket.close();
  }, []);
  return (
    <div className="flex bg-slate-950 relative ">
    

    <Sidebar />
    
    <div className="flex-1">
      <div className='bg-slate-900/40 backdrop-blur-sm m-0'>
          <Header system={system} />
    </div> 

      <Routes>
      <Route path='/' element={<Process processes={processes} system={system}/>}/>
      <Route path='/Queue' element={<Queue/>}/>
    </Routes>
    </div>

    </div>
    
  )
}

export default App