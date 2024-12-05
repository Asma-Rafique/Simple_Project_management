import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectSidebar from "./Components/ProjectSidebar";
import SelectedProject from "./Components/SelectedProject";
function App() {
  const [projectsState,setProjectsState]=useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  //handle the tasks added in the project
  function handleAddTask(text){
    setProjectsState((prevState)=>{
      const taskId=Math.random();
      const newTask={
        text:text,
        projectId: prevState.selectedProjectId,
        id:taskId,
      };
      
      return{
        ...prevState,
        tasks:[newTask ,...prevState.tasks]
      };
    });
  } 
  
  //handle deletion of the tasks from project
  function handleDeleteTask(id){
    setProjectsState((prevState)=>{
      return{
        ...prevState,
        tasks: prevState.tasks.filter(
          (task)=>task.id!== id),
      };
    });
  } 

  function handleStartAddProject(){
    setProjectsState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelProject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handleAddProject(projectData){
    setProjectsState((prevState)=>{
      const newProject={
        ...projectData,
        id:Math.random()
      };
      
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newProject]
      };
    });
  } 
// function for the selection of sidebar projects
  function handleSelectedProject(id){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  // handle deletion of project

  function handleDeleteProject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project)=>project.id!== prevState.selectedProjectId
        ),
        
      };
    });
  }
  //for passing the selected project properties 
  const selectProject= projectsState.projects.find(
    (project)=>project.id===projectsState.selectedProjectId);
    
  let content= <SelectedProject 
    project={selectProject} 
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    tasks={projectsState.tasks}
    onDeleteTask={handleDeleteTask}
    /> ;
  if(projectsState.selectedProjectId===null){
    content=<NewProject onAddProject={handleAddProject} onCancel={handleCancelProject}/>
  } else if(projectsState.selectedProjectId===undefined){
    content= <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }
    return (
       <>
          <main className="flex gap-8 h-screen my-8">
          <ProjectSidebar onStartAddProject={handleStartAddProject}
            projects={projectsState.projects}
            onSelectedProject={handleSelectedProject}
            selectedProjectId={projectsState.selectedProjectId}
          />
          {content}
          </main>
       </>
    );
  }

export default App;
