import AddNewTask from "./AddNewTask";
export default function Task({onAddTask,tasks,onDeleteTask}){
    return <section>
        <div className="flex flex-col gap-8 justify-between mr-8">
        <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
        <AddNewTask onAddTask={onAddTask} />
        {tasks.length=== 0 && (
            <p className="text-stone-800 my-4">
            This project have no tasks yet
            </p>
        ) }
        {tasks.length>0 && (
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map((task)=>(
                <li className="flex justify-between my-4"
                key={task.id}>
                <span> {task.text} </span>
                <button onClick={()=>onDeleteTask(task.id)} className='px-6 py-2 rounded-md text-red-500 hover:text-red-700' >Clear</button>
                </li>
            ))}
            </ul>
            )
        }
        </div>
    </section>
}