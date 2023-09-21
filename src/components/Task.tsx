export function Task(){
    return(
        <div className="m-8 rounded-lg bg-[#979797] font-Lexend">
            <div className="flex justify-between text-white">
            <div className="flex flex-col m-5">
                <div className="flex flex-row font-bold">Hacer tarea</div>
                <div className="flex flex-row"> hacerla ahora pq ...</div>
            </div>
            <div className="flex flex-col justify-center m-3 font-bold">Due date: fecha</div>
            </div>
        </div>
    )
}

export default Task;