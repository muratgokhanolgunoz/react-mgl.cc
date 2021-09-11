import axios from 'axios'
import Services from './Services'

class HomeServise extends Services {
    userLog() {
        return axios.post(this.API_URL + "log")
    }

    getHome(_language) {
        return this.getList(_language + "/home")
    }
}
export default HomeServise