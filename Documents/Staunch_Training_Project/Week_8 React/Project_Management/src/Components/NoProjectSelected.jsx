import Button from './Button.jsx';
import noProjectImage from '../assets/no-projects.png';
export default function NoProjectSelected({onStartAddProject}){
    return(
        <div className='flex flex-col gap-6 text-2xl mt-24 text-center w-2/3'>
            <img src={noProjectImage} className='object-contain mx-auto w-[10rem]' alt="empty task list" />
            <h2 className='font-bold text-3xl'>No Project Selected </h2>
            <p>Select a project or get started with a new one</p>
            <p>
                <Button onClick={onStartAddProject}>Create new project</Button>
            </p>
        </div>
    )
}