import axios from 'axios'

class ScheduleServices {
    API_URL = "https://midas.frigian.net/api/getCurrentConsoles"
    
    getSchedule() {
        return axios.get(this.API_URL)
    }
}
export default ScheduleServices