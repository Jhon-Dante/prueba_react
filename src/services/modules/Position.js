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

class Position {

    static async getPosition(){
        return new Promise((resolve, reject) => {
            axios.get(Constants.API+`/position/get/all`,config)
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

export default Position