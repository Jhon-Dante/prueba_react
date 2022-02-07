import axios from "axios"
import Constants from './../../utils/Constants'

class Title {

    static async getTitle(){
        return new Promise((resolve, reject) => {
            axios.get(Constants.API+`/title/get/all`)
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

export default Title;