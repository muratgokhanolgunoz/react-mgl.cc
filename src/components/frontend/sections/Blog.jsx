/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import FrontEndContext from '../../../context/FrontEndContext'
import BlogService from '../../../services/BlogService'
import { withTranslation } from 'react-i18next'

import Titles from '../layouts/SectionTitles'
import BlogPopup from './popups/BlogPopup'
import { Row, Col, Image } from 'react-bootstrap'

let blogService = new BlogService()

class Blog extends Component {
    state = {
        popupShow: false,
        selectedBlog: {},
        blogSourceFromApi: [],
        currentLanguage: this.props.i18n.language
    }

    componentDidMount() {
        this.blogs()
    }

    componentDidUpdate() {
        if (this.state.currentLanguage !== this.props.i18n.language) {
            this.setState({ currentLanguage: this.props.i18n.language })
            this.context.setBlogs([])
            this.blogs()
        }
    }

    handlePopupShow = (_status) => this.setState({ popupShow: _status })
    sendBlogInformation = (_blog) => this.setState({ selectedBlog: _blog })

    blogs = () => {
        blogService.getBlogs(this.props.i18n.language.toLowerCase())
            .then(response => { this.context.setBlogs(response.data.result) })
            .catch(() => console.warn("API Error: Unable to load blog section"))
    }

    render() {
        return (
            <FrontEndContext.Consumer>
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
                                        language={this.props.t}
                                        popupShow={this.state.popupShow}
                                        popupShowToggle={this.handlePopupShow}
                                        blogDetails={this.state.selectedBlog}
                                    />
                                </div>
                            )
                            : null
                    )
                }}
            </FrontEndContext.Consumer>
        )
    }
}
Blog.contextType = FrontEndContext
export default withTranslation('translation')(Blog)