import axios from "axios"
import Constants from './../../utils/Constants'

class UnionMemberShipStatus {

    static async getUnionMemberShipStatus(){
        return new Promise((resolve, reject) => {
            axios.get(Constants.API+`/union-membership-status/get/all`)
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

export default UnionMemberShipStatus