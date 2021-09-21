import axios from 'axios'

class Services {
    API_URL = "https://demo.frigian.net/api/"
    // API_URL = "http://localhost:8000/api/"

    getList(_url) {
        return axios.get(this.API_URL + _url)
    }
}
export default Services