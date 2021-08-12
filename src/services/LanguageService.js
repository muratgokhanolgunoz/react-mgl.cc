import axios from 'axios'

class LanguageService{
    API_URL = "http://localhost:8000/api/"

    getLanguage(_language) {
        return axios.get(this.API_URL + "language/" + _language)
    }
}
export default LanguageService