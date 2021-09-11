import axios from 'axios'
import Services from './Services'

class CareerService extends Services {
    getCareerList() {
        return this.getList("career")
    }

    uploadCareer(_data) {
        return axios.post(this.API_URL + "career/add", _data)
    }
}
export default CareerService