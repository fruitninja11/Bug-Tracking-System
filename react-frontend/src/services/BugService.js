import axios from 'axios';

const BUGS_API_BASE_URL="http://localhost:8081/api/v1/bugs";

class BugService{

    getAllBugs(){
        return axios.get(BUGS_API_BASE_URL);  
    }    

    saveBug(bug){
        return axios.post(BUGS_API_BASE_URL,bug).then(response=>{
            if (response.data!=null) {
                alert("Bug Created Succesfully!")
            }
            else{
                alert("Bug cannot be created!!");
            }
        })
    }

    getBugById(bugid){
        console.log(BUGS_API_BASE_URL+ '/'+ bugid);
        return axios.get(BUGS_API_BASE_URL+ '/'+ bugid);
    }

    updateBugDetails(bugid,bug){
        return axios.put(BUGS_API_BASE_URL + '/' + bugid,bug).then(response=>{
            if (response.data!=null) {
                alert("Bug Updated Succesfully!")
            }
            else{
                alert("Bug cannot be created!!");
            }  
        })
    }

    deleteBug(bugid){
        return axios.delete(BUGS_API_BASE_URL+ '/'+ bugid);
    }
}

export default new BugService()