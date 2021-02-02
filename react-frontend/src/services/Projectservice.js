import axios from 'axios';

const PROJECTS_API_BASE_URL ="http://localhost:8081/api/v1/projects";

const PROJECT_EMPLOYEE_URL="http://localhost:8081/api/v1/projsemps"

class Projectservice{
    getAllProjects(){
        return axios.get(PROJECTS_API_BASE_URL);
    }

    createProject(project){
        return axios.post(PROJECTS_API_BASE_URL,project).then(response =>{
            if(response.data != null){
                alert("New Project Created Succesfully");
            }
            else{
                alert("Project cannot be created!!");
            }
        })
    }

    assignProject(project){
        return axios.post(PROJECT_EMPLOYEE_URL,project).then(response=>{
            if(response.data != null){
                alert("Project Assigned!");
            }
            else{
                alert("Project cannot be assigned!!");
            }
        })
    }    

    allotedProjects(){
        return axios.get(PROJECT_EMPLOYEE_URL);
    }

    deleteProject(projectid){
        return axios.delete(PROJECTS_API_BASE_URL+'/'+projectid);
    }

    deleteAssignedProject(empid){
        return axios.delete(PROJECT_EMPLOYEE_URL+'/'+empid);
    }

    getProjectById(projectid){
        return axios.get(PROJECTS_API_BASE_URL+'/'+projectid);
    }

}

/* We are not exporting the class but the object of this class 
so we directly use object of this class inside a component*/

export default new Projectservice()