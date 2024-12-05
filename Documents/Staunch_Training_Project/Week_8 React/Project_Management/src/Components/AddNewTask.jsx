import { useState } from "react";
export default function AddNewTask({onAddTask}){
    // console.log(onAddTask);
    const classes ="w-full pl-4 boarder-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:border-stone-600";
    const [task, setTask]=useState('');
    function handleChange(event){
        setTask(event.target.value);
    }
    console.log(task);
    function handleClick(){
        if (task.trim() === "") {
            alert("Task cannot be empty!"); // validation
            return;
        }
        onAddTask(task);
        setTask('');
    }
    return (
        <div className="flex justify-between ">
            <input onChange={handleChange} value={task} className= {classes} type="text" />
            <button onClick={handleClick} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Add Task</button>
        </div>
    );
}