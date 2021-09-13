import axios from 'axios'
import Services from './Services'

class HomeServise extends Services {
    userLog() {
        return axios.post(this.API_URL + "mglLog")
    }

    getHome() {
        return this.getList("mglHome")
    }
}
export default HomeServise