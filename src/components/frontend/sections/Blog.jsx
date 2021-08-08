import React, { Component } from 'react'
import Titles from './titles/Titles'
import BlogPopup from './popups/BlogPopup'
import { Row, Col, Image } from 'react-bootstrap'

class Blog extends Component {

    state = {
        popupShow: false,
        selectedBlog: null // Seçilen bloğun id sini buton click ile buraya set ediceksin 
    }

    handlePopupShow = (_status) => this.setState({ popupShow: _status })

    render() {
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
                    <Col className="blog-box" lg={3} md={6}>
                        <div className="blog-box-item">
                            <Image className="blog-box-image" src={this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_THUMBNAIL')} fluid />
                            <span>
                                {this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_DATE')} | {' '}
                                <small>
                                    {this.props.languageLibrary.language === "tr"
                                        ? 
                                            this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR')                                        
                                        : 
                                        this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR')
                                    }
                                </small></span>
                            <h6>{this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_TITLE')}</h6>
                            <p>{this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_SUMMARY')}</p>
                            <a className="template-button template-button-primary-2" href="#blog" onClick={() => this.handlePopupShow(true)}>{this.props.language('blog.body.BLOG_SECTION_BUTTON')}</a>
                        </div>
                    </Col>
                </Row>

                <BlogPopup
                    language={this.props.language}
                    popupShow={this.state.popupShow}
                    popupShowToggle={this.handlePopupShow}
                />
            </div>
        )
    }
}
export default Blog