import { useState } from "react";
import Task from "./components/Task.tsx";
import { AiOutlinePlus } from "react-icons/ai";


export default function App() {
  const [tasks, setTasks] = useState<React.ReactNode[]>([]);
  

  const handleCreateTask = () => {
    setTasks([...tasks, <Task />]);
  };

  return (
    <div className="font-Lexend bg-custom min-h-screen min-w-full">
      <div className="flex flex-row justify-between flex-wrap items-center p-4 md:p-10 font-bold">
        <div className="space-y-4 md:space-y-10">
          <h1 className="text-white text-3xl md:text-5xl">DoneNow</h1>
          <button
            className="flex flex-row bg-white rounded-full p-2 md:p-4 items-center"
            onClick={handleCreateTask}
          >
            <AiOutlinePlus className="flex flex-row items-center" />
            <span className="hidden md:block">Create task</span>
          </button>
        </div>
        <h2 className="text-white text-lg md:text-2xl">Welcome back Shago!</h2>
      </div>

      <div className="flex-grow flex-row rounded-2xl bg-[#454545] m-4 md:m-8 space-y-4 md:space-y-6 p-2 md:p-5 h-[600px] overflow-y-auto">
        {tasks}
      </div>
    </div>
  );
}