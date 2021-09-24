/* eslint-disable no-useless-concat */
import axios from 'axios'
import Services from './Services'

class BlogService extends Services {
    getBlogs(_language) {
        return this.getList("mglBlog/" + _language)
    }

    getSelectedBlog(_language, _id) {
        return this.getList("mglBlog/" + _language + "/" + _id)
    }

    addBlog(_language, _data) {
        return axios.post(this.API_URL + "mglBlog/add/" + _language, _data)
    }

    deleteBlog(_language, _data) {
        return axios.post(this.API_URL + "mglBlog/delete/" + _language, _data)
    }

    updateBlog(_language, _data) {
        return axios.post(this.API_URL + "mglBlog/update/" + _language, _data)
    }
}
export default BlogService