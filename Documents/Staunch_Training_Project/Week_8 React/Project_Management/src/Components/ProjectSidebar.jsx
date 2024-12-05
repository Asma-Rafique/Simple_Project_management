import Button from './Button.jsx';
export default function ProjectSidebar({onStartAddProject, projects, onSelectedProject,selectedProjectId}){

    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
            Project name</h2>
        <div>
        <Button onClick={onStartAddProject}>+ Add </Button>
        </div>
        <ul className='mt-8 '>
            {projects.map((item)=>
            {
                let cssClasses='w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-stone-800';
                if(item.id===selectedProjectId){
                    cssClasses +=' text-stone-100 bg-stone-800';
                }else{
                    cssClasses += ' text-stone-400';
                }
                return (
                    <li key={item.id}>
                    <button className={cssClasses}
                        onClick={()=> onSelectedProject(item.id)}
                    >
                        {item.title}</button>
                </li>
                );
            }
            )}    
        </ul>
    </aside>
}