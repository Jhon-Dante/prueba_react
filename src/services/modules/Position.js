import axios from "axios"
import Constants from './../../utils/Constants'

class Position {

    static async getPosition(){
        return new Promise((resolve, reject) => {
            axios.get(Constants.API+`/position/get/all`)
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