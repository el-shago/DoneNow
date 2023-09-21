import { BsCheckCircle } from "react-icons/bs";
import { useState } from "react";

export function Task() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div
      className="m-8 rounded-lg bg-[#979797] font-Lexend hover:bg-[#797979] hover:text-opacity-0 transition-all duration-300 relative"
      onMouseEnter={() => setShowComponent(true)}
      onMouseLeave={() => setShowComponent(false)}
    >
      <div className="flex justify-between text-white">
        <div className="flex flex-col m-5">
          <div className="flex flex-row font-bold">Hacer tarea</div>
          <div className="flex flex-row">hacerla ahora pq ...</div>
        </div>
        <div className="flex flex-col justify-center m-3 font-bold">
          Due date: fecha
        </div>
      </div>

      {showComponent && (
        <div className="absolute inset-0 flex items-center justify-center">
          <BsCheckCircle className="text-white text-6xl" />
        </div>
      )}
    </div>
  );
}

export default Task;
