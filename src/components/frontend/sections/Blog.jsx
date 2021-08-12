import React, { Component } from 'react'
import FrontEndContext from '../../../context/FrontEndContext'
import Titles from './titles/Titles'
import BlogPopup from './popups/BlogPopup'
import { Row, Col, Image } from 'react-bootstrap'

import BlogService from '../../../services/BlogService'

let blogService = new BlogService()

class Blog extends Component {
    state = {
        popupShow: false,
        selectedBlog: {},
        blogSourceFromApi: [],
        currentLanguage: this.context.state.language
    }

    componentDidMount() {        
        this.blogs()
    }

    componentDidUpdate() {

        if(this.state.currentLanguage !== this.context.state.language) {
            this.setState({ currentLanguage: this.context.state.language })
            this.setState({ blogSourceFromApi: [] })
            this.blogs()
        }
    }

    handlePopupShow = (_status) => this.setState({ popupShow: _status })
    sendBlogInformation = (_blog) => this.setState({ selectedBlog: _blog })

    blogs = () => {
        blogService.getBlogs(this.context.state.language.toLowerCase())
            .then(response => { this.setState({ blogSourceFromApi: response.data.result }) })
            .catch(() => console.warn("API Error: Unable to load blog section"))
    }

    render() {
        return (
            <FrontEndContext.Consumer>
                {(context) => {
                    return (
                        <div id="blog" className="blog section-padding">
                            <Row>
                                <Titles
                                    title={this.props.language('blog.header.BLOG_SECTION_TITLE')}
                                    subtitle=""
                                    description=""
                                    textAlign="text-center"
                                    color="text-dark"
                                    fontSize="section-title-description-font-size"
                                />
                            </Row>
                            <Row>
                                {
                                    this.state.blogSourceFromApi.map((blog) => (
                                        <Col className="blog-box" xl={3} md={6} key={blog.BLOG_SECTION_ITEMS_ID}>
                                            <div className="blog-box-item" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="150">
                                                <Image className="blog-box-image" src={blog.BLOG_SECTION_ITEMS_THUMBNAIL} fluid />
                                                <span className="blog-box-item-author">
                                                    <span>{blog.BLOG_SECTION_ITEMS_DATE} | {' '}</span>
                                                    <span>
                                                        <small>
                                                            {this.props.languageLibrary.language === 'tr'
                                                                ? <span><b>{blog.BLOG_SECTION_ITEMS_AUTHOR}{' '}</b>{this.props.language('blog.body.BLOG_SECTION_ITEMS_AUTHOR_PREFIX')}</span>
                                                                : <span><b>{this.props.language('blog.body.BLOG_SECTION_ITEMS_AUTHOR_PREFIX')}{' '}</b>{blog.BLOG_SECTION_ITEMS_AUTHOR}</span>
                                                            }
                                                        </small>
                                                    </span>
                                                </span>
                                                <h6>{blog.BLOG_SECTION_ITEMS_TITLE}</h6>
                                                <p>{blog.BLOG_SECTION_ITEMS_SUMMARY}</p>
                                                <a className="template-button template-button-primary-2" href="#blog" onClick={() => { this.handlePopupShow(true); this.sendBlogInformation(blog) }}>{this.props.language('blog.body.BLOG_SECTION_BUTTON')}</a>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>

                            <BlogPopup
                                language={this.props.language}
                                popupShow={this.state.popupShow}
                                popupShowToggle={this.handlePopupShow}
                                blogDetails={this.state.selectedBlog}
                            />
                        </div>
                    )
                }}
            </FrontEndContext.Consumer>
        )
    }
}
Blog.contextType = FrontEndContext
export default Blog