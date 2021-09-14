/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Context from '../../../context/Context'
import BlogService from '../../../services/BlogService'
import { withTranslation } from 'react-i18next'
import queryString from "query-string"
import Titles from '../layouts/SectionTitles'
import BlogPopup from './popups/BlogPopup'
import { Row, Col, Image } from 'react-bootstrap'
import { showToast } from '../../../core/functions'

let blogService = new BlogService()
let urlParams
const languages = {
    tr: "TR",
    us: "EN"
}

class Blog extends Component {
    state = {
        popupShow: false,
        selectedBlog: {},
        blogSourceFromApi: [],
        currentLanguage: this.props.i18n.language,
        urlLanguage: ""
    }

    componentDidMount() {
        this.blogs(this.props.i18n.language.toLowerCase())

        urlParams = queryString.parse(location.search)
        this.showBlogFromUrl()
    }

    componentDidUpdate() {
        if (this.state.currentLanguage !== this.props.i18n.language) {
            this.setState({ currentLanguage: this.props.i18n.language })
            this.context.setBlogs([])
            this.blogs(this.props.i18n.language.toLowerCase())
        }
    }

    showBlogFromUrl = () => {
        if (Object.keys(urlParams).length !== 0 && urlParams.language !== undefined && urlParams.language in languages === true && urlParams.blog !== undefined && urlParams.blog !== "") {
            blogService.getSelectedBlog(urlParams.language, urlParams.blog)
                .then((response) => {
                    this.setState({ selectedBlog: response.data.result })
                })
                .then(() => {
                    this.props.i18n.changeLanguage(urlParams.language)
                    this.handlePopupShow(true)
                })
                .catch(() => {
                    console.warn("API Error: Unable to load blog section")
                    showToast("bottom-right", this.props.t('blog.error.BLOG_SECTION_ERROR_BLOG_NOT_FOUND'), "error")
                })
        }
    }

    handlePopupShow = (_status) => this.setState({ popupShow: _status })
    sendBlogInformation = (_blog) => this.setState({ selectedBlog: _blog })

    blogs = (_language) => {
        blogService.getBlogs(_language)
            .then(response => { this.context.setBlogs(response.data.result) })
            .catch(() => console.warn("API Error: Unable to load blog section"))
    }

    render() {
        return (
            <Context.Consumer>
                {(context) => {
                    return (
                        context.state.blogs.length > 0
                            ?
                            (
                                <div id="blog" className="blog section-padding">
                                    <Row>
                                        <Titles
                                            title={this.props.t('blog.header.BLOG_SECTION_TITLE')}
                                        />
                                    </Row>
                                    <Row>
                                        {
                                            context.state.blogs.map((blog) => (
                                                <Col className="blog-box" xl={3} md={6} key={blog.BLOG_SECTION_ITEMS_ID}>
                                                    <div className="blog-box-item">
                                                        <Image className="blog-box-image" src={blog.BLOG_SECTION_ITEMS_THUMBNAIL} fluid />
                                                        <span className="blog-box-item-author">
                                                            <span>{blog.BLOG_SECTION_ITEMS_DATE.substr(0, 10)} | {' '}</span>
                                                            <span>
                                                                <small>
                                                                    {this.props.i18n.language === 'tr'
                                                                        ? <span><b>{blog.BLOG_SECTION_ITEMS_AUTHOR}{' '}</b>{this.props.t('blog.body.BLOG_SECTION_ITEMS_AUTHOR_PREFIX')}</span>
                                                                        : <span><b>{this.props.t('blog.body.BLOG_SECTION_ITEMS_AUTHOR_PREFIX')}{' '}</b>{blog.BLOG_SECTION_ITEMS_AUTHOR}</span>
                                                                    }
                                                                </small>
                                                            </span>
                                                        </span>
                                                        <h6>{blog.BLOG_SECTION_ITEMS_TITLE}</h6>
                                                        <p>{blog.BLOG_SECTION_ITEMS_SUMMARY}</p>
                                                        <a className="template-button template-button-primary-2 template-button-box-shadow" onClick={() => { this.handlePopupShow(true); this.sendBlogInformation(blog) }}>{this.props.t('blog.body.BLOG_SECTION_BUTTON')}</a>
                                                    </div>
                                                </Col>
                                            ))
                                        }
                                    </Row>

                                    <BlogPopup
                                        popupShow={this.state.popupShow}
                                        popupShowToggle={this.handlePopupShow}
                                        blogDetails={this.state.selectedBlog}
                                    />
                                </div>
                            )
                            : null
                    )
                }}
            </Context.Consumer>
        )
    }
}
Blog.contextType = Context
export default withTranslation('translation')(Blog)