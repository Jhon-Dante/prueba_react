import axios from "axios"
import Constants from './../../utils/Constants'

const user = JSON.parse(sessionStorage.getItem('user'));
const config = {
    headers : {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/x-www-form-urlencoded',
    }
};

if(user){
    const token = user.token;
    config = {
        headers: { Authorization: `Bearer ${token}` }
    };
}

class Members {

    static async addMember(form){
        return new Promise((resolve, reject) => {
            axios.post(Constants.API+`/member`,form,config)
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

export default Members