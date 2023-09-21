import Task from './components/Task.tsx';

export default function App() {
  return (
    <div className="bg-custom font-Lexend h-full w-full">
      <div className='flex flex-row justify-between flex-wrap items-center p-5 font-bold'>
      <h1 className='text-white text-5xl'>DoneNow</h1>
      <h2 className='text-white text-2xl'>Welcome back Shago!</h2>
      </div>
      <button className='bg-white rounded-full p-2'>Create task</button>
      <div className='rounded-lg bg-[#454545] m-3'>
      <Task />
      </div>
    </div>
    
  )
}