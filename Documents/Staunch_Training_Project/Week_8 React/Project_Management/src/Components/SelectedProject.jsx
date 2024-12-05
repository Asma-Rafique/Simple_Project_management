import { useState } from "react";
import Task from "./Task";
export default function SelectedProject({project ,onDelete, onAddTask, tasks,onDeleteTask}){
    // console.log(onAddTask);
    const formatedDate= new Date(project.dueDate).toLocaleDateString('en-US',{
        year:'numeric',
        month:'short',
        day:'numeric'
    });
    
    return(
        <div className="w-[35rem] mt-16">
            <header  className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <button className='px-6 py-2 rounded-md bg-red-500 text-white hover:bg-red-800' onClick={onDelete}>Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formatedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            {/* <button onClick={handleAddTask}>ADD TASK</button> */}
            <Task onAddTask={onAddTask} tasks={tasks} onDeleteTask={onDeleteTask}/>
        </div>
    )
}