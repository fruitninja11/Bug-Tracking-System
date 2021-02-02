import axios from 'axios';

const LOGIN_API_BASE_URL ="http://localhost:8081/api/v1/login";

class Loginservice{

    authenticateUser(employee){
        return axios.post(LOGIN_API_BASE_URL, employee);
    }
}    

export default new Loginservice()