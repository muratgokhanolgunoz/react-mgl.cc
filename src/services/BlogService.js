import axios from 'axios'
import Services from './Services'

class BlogService extends Services {
    getBlogs(_language) {
        return this.getList("blog/" + _language)
    }

    getSelectedBlog(_language, _id) {
        return this.getList("blog/" + _language + "/" + _id)
    }

    addBlog(_language, _data) {
        return axios.post(this.API_URL + "blog/" + _language + "/add", _data)
    }

    deleteBlog(_language, _data) {
        return axios.post(this.API_URL + "blog/" + _language + "/delete", _data)
    }
}
export default BlogService