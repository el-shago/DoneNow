import Task from "./components/Task.tsx";
import { AiOutlinePlus } from "react-icons/ai";

export default function App() {
  return (
    <div className="bg-custom font-Lexend h-screen w-screem">
      <div className="flex flex-row justify-between flex-wrap items-center p-10 font-bold">
        <div className="space-y-10">
          <h1 className="text-white text-5xl">DoneNow</h1>
          <button className="flex flex-row bg-white rounded-full p-4 items-center">
            <AiOutlinePlus classname="flex flex-row items-center"/> 
            Create task
          </button>
        </div>
        <h2 className="text-white text-2xl">Welcome back Shago!</h2>
      </div>

      <div className="rounded-2xl bg-[#454545] m-8 space-y-6 p-5 h-4/6">
        <Task />
        <Task />
      </div>
    </div>
  );
}
