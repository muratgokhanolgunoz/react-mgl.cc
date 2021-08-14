import axios from 'axios'

class BlogService {
    API_URL = "http://localhost:8000/api/"

    getBlogs(_language) {
        return axios.get(this.API_URL + "blog/" + _language)
    }

    deleteBlog(_array) {
        return axios.post(this.API_URL + "blog/delete", _array)
    }
}
export default BlogService