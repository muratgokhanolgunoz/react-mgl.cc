import axios from 'axios'

class HomeServise {

    API_URL = "http://localhost:8000/api/"

    getHome(language_) {
        return axios.get(this.API_URL + language_ + "/home")
    }
}
export default HomeServise