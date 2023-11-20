export default function CreateTask(){
    return(
        <div className="h-screen flex justify-center items-center absolute">
        <div className="bg-gray-500 w-2/4 rounded-lg">
          <div className="flex flex-col gap-4 mx-8">
          <h1 className="text-white text-3xl font-bold text-center">Task Info</h1>
              <input
                id="title"
                type="text"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                className="rounded-2xl text-white text-xl py-2 px-3 w-full placeholder-white placeholder-opacity-80"
                placeholder="Title"
              />
            <textarea
              id="description"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              className="rounded-2xl text-white text-xl py-2 px-3 w-full placeholder-white placeholder-opacity-80"
              placeholder="Description"
              maxLength={150}
            />

<input
              id="month"
              type="date"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              className="rounded-2xl text-white text-xl py-2 px-3 w-full placeholder-white placeholder-opacity-80"
              placeholder="Month"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-transparent border border-[#1ED947] py-3 px-10 text-[#1ED947] rounded-md mt-10 hover:bg-[#1ED947] hover:text-white transition-all duration-300 m-5"
            >
              Create Task
            </button>
          </div>
        </div>   
        </div>
    )
}