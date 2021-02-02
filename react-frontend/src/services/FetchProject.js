import axios from 'axios';

const BUGS_API_BASE_URL="http://localhost:8081/api/v1/projsemps";
const PROJECT_BUS_API_URL="http://localhost:8081/api/v1/projectbugs"


class FetchProject{

    getProjectForEmployee(empid){
        return(axios.get(BUGS_API_BASE_URL+'/'+empid));
}

    getBugsForProject(projectid){
        return axios.get(PROJECT_BUS_API_URL+'/'+projectid);
    }
}

export default new FetchProject()