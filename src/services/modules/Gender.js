import axios from "axios"
import Constants from './../../utils/Constants'

class Gender {

    static async getGender(form){
        return new Promise((resolve, reject) => {
            axios.get(Constants.API+`/gender/get/all`,form)
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

export default Gender