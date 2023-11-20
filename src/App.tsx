import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Task from "./components/Task.tsx";
import CreateTask from "./components/CreateTask.tsx";

export interface ITask {
  task_id: number;
  title: string;
  description: string;
  due_date: string;
}
export default function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  
  useEffect(() => {
    fetchTasks();
  }, [])

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:3000");
    const data = await response.json();
    setTasks(data.tasks);
    
  }

  const [show, setShow] = useState(false);

  return (
    <div className="font-Lexend bg-custom min-h-screen min-w-full">
      <div className="flex flex-row justify-between flex-wrap items-center p-4 md:p-10 font-bold">
        <div className="space-y-4 md:space-y-10">
          <h1 className="text-white text-3xl md:text-5xl">DoneNow</h1>
          <button
            className="flex flex-row bg-white rounded-full p-2 md:p-4 items-center"
            onClick= {() => setShow(!show)}
          >
            <AiOutlinePlus className="flex flex-row items-center" />
            <span className="hidden md:block">Create task</span>
          </button>
        </div>
        <h2 className="text-white text-lg md:text-2xl">Welcome back Shago!</h2>
      </div>
      {show ? <CreateTask />: ""}
      <div className="flex-grow flex-row rounded-2xl bg-[#454545] m-4 md:m-8 space-y-4 md:space-y-6 p-2 md:p-5 h-[600px] overflow-y-auto">
        {tasks.map((task) => (
          <Task
          key={task.task_id}
          title ={task.title}
          description = {task.description}
          due_date = {task.due_date}
          />
        ))}
      </div>
    </div>
  );
}