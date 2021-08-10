import React, { Component } from 'react'
import FrontEndContext from '../../../context/FrontEndContext'
import Titles from './titles/Titles'
import BlogPopup from './popups/BlogPopup'
import { Row, Col, Image } from 'react-bootstrap'

class Blog extends Component {

    state = {
        popupShow: false,
        selectedBlog: {}
    }

    handlePopupShow = (_status) => this.setState({ popupShow: _status })
    sendBlogInformation = (_blog) => this.setState({ selectedBlog: _blog })

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
                                    this.props.language('blog.body.items', { returnObjects: true }).map((blog, index) => (
                                        <Col className="blog-box" xl={3} md={6} key={index}>
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
export default Blog