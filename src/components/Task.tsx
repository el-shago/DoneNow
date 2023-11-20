import { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { ITask } from "../App";

interface TaskProps {
  title: string;
  description: string;
  due_date: string;
}

const Task: React.FC<TaskProps> = ({ title, description, due_date }) => {
  const [showComponent, setShowComponent] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
  };
  const formattedDueDate = new Date(due_date).toLocaleDateString();
  return (
    <div
      className={`m-8 rounded-lg font-Lexend transition-all duration-300 relative ${
        completed ? "bg-green-500" : "bg-[#979797] hover:bg-[#797979]"
      }`}
      onMouseEnter={() => setShowComponent(!completed)}
      onMouseLeave={() => setShowComponent(completed)}
      onClick={handleComplete}
    >
      <div className="flex justify-between">
        <div className="flex flex-col m-5">
          <div className={`flex flex-row font-bold text-white ${completed ? "opacity-0" : showComponent ? "opacity-0" : ""}`}>
            {title}
          </div>
          <div className={`flex flex-row text-white ${completed ? "opacity-0" : showComponent ? "opacity-0" : ""}`}>
            {description}
          </div>
        </div>
        <div className={`flex flex-col justify-center m-3 font-bold text-white ${completed ? "opacity-0" : showComponent ? "opacity-0" : ""}`}>
          Due date: {formattedDueDate}
        </div>
      </div>

      {showComponent && (
        <div className="absolute inset-0 flex items-center justify-center">
          <BsCheckCircle className="text-white text-6xl" />
        </div>
      )}
    </div>
  );
};

export default Task;
