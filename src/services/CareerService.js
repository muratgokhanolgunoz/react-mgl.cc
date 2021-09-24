import axios from 'axios'
import Services from './Services'

class CareerService extends Services {
    getCareerList() {
        return this.getList("mglCareer")
    }

    uploadCareer(_data) {
        return axios.post(this.API_URL + "mglCareer/add", _data)
    }
}
export default CareerService