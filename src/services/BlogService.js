import axios from 'axios'

class BlogService {
    API_URL = "http://localhost:8000/api/"

    getBlogs(_language) {
        return axios.get(this.API_URL + "blog/" + _language)
    }

    addBlog(_language, _data) {
        return axios.post(this.API_URL + "blog/" + _language + "/add", _data)
    }

    deleteBlog(_language, _data) {
        return axios.post(this.API_URL + "blog/" + _language + "/delete", _data)
    }
}
export default BlogService