import axios from "axios"
import Constants from './../../utils/Constants'

    const headers = {
        headers : {
            'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Credentials': 'true',
        }
    }
    const cors = {
        mode:"cors",
    }
class Auth {
    
    static async auth(form){
        return new Promise((resolve, reject) => {
            axios.post(Constants.API_LOGIN,form,headers,cors)
            .then(
                ({ data }) => {
                    // http success
                    resolve(data);
                },
                ({ response }) => {
                    const { data } = response;
                    // http failed
                    reject(data);
                }
            )
        })
    }
}

export default Auth