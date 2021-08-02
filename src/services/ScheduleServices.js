import axios from 'axios'

class ScheduleServices {
    API_URL = "https://midas.frigian.net/api/"
    
    getSchedule() {
        return axios.get(this.API_URL + "getCurrentConsoles")
    }
}
export default ScheduleServices