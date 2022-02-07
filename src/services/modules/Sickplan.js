import axios from "axios"
import Constants from './../../utils/Constants'

class Sickplan {

    static async getSickplan(){
        return new Promise((resolve, reject) => {
            axios.get(Constants.API+`/sickplan/get/all`)
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

export default Sickplan