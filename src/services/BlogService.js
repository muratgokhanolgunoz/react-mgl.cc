import axios from 'axios'

class BlogService {
    API_URL = "http://localhost:8000/api/"

    getBlogs(_language) {
        return axios.get(this.API_URL + "blog/" + _language)
    }
}
export default BlogService