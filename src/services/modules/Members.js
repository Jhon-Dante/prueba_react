import axios from "axios"
import Constants from './../../utils/Constants'

class Members {

    static async addMember(form){
        return new Promise((resolve, reject) => {
            axios.get(Constants.API+`/member`)
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