import axios from 'axios'

class CareerService {
    API_URL = "http://localhost:8000/api/"
    
    getCareerList() {
        return axios.get(this.API_URL + "career")
    }

    uploadCareer(_data) {
        return axios.post(this.API_URL + "career/add", _data)
    }
}
export default CareerService