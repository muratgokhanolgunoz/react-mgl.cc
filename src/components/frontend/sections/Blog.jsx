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
                    <Col className="blog-box" xl={3} md={6}>
                        <div className="blog-box-item" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="150">
                            <Image className="blog-box-image" src={this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_THUMBNAIL')} fluid />
                            <span className="blog-box-item-author">
                                {this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_DATE')} | {' '}
                                <small>
                                    {this.props.languageLibrary.language === "tr"
                                        ?
                                        (
                                            <span>
                                                <b>
                                                    {this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR')}{' '}
                                                </b>
                                                {this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR_PREFIX')}
                                            </span>
                                        )
                                        :
                                        (
                                            <span>
                                                {this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR_PREFIX')}
                                                <b>
                                                    {' '}{this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR')}
                                                </b>
                                            </span>
                                        )
                                    }
                                </small></span>
                            <h6>{this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_TITLE')}</h6>
                            <p>{this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_SUMMARY')}</p>
                            <a className="template-button template-button-primary-2" href="#blog" onClick={() => this.handlePopupShow(true)}>{this.props.language('blog.body.BLOG_SECTION_BUTTON')}</a>
                        </div>
                    </Col> 
                    <Col className="blog-box" xl={3} md={6}>
                        <div className="blog-box-item" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="300">
                            <Image className="blog-box-image" src={this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_THUMBNAIL')} fluid />
                            <span className="blog-box-item-author">
                                {this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_DATE')} | {' '}
                                <small>
                                    {this.props.languageLibrary.language === "tr"
                                        ?
                                        (
                                            <span>
                                                <b>
                                                    {this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR')}{' '}
                                                </b>
                                                {this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR_PREFIX')}
                                            </span>
                                        )
                                        :
                                        (
                                            <span>
                                                {this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR_PREFIX')}
                                                <b>
                                                    {' '}{this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR')}
                                                </b>
                                            </span>
                                        )
                                    }
                                </small></span>
                            <h6>{this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_TITLE')}</h6>
                            <p>{this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_SUMMARY')}</p>
                            <a className="template-button template-button-primary-2" href="#blog" onClick={() => this.handlePopupShow(true)}>{this.props.language('blog.body.BLOG_SECTION_BUTTON')}</a>
                        </div>
                    </Col> 
                    <Col className="blog-box" xl={3} md={6}>
                        <div className="blog-box-item" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="450">
                            <Image className="blog-box-image" src={this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_THUMBNAIL')} fluid />
                            <span className="blog-box-item-author">
                                {this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_DATE')} | {' '}
                                <small>
                                    {this.props.languageLibrary.language === "tr"
                                        ?
                                        (
                                            <span>
                                                <b>
                                                    {this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR')}{' '}
                                                </b>
                                                {this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR_PREFIX')}
                                            </span>
                                        )
                                        :
                                        (
                                            <span>
                                                {this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR_PREFIX')}
                                                <b>
                                                    {' '}{this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR')}
                                                </b>
                                            </span>
                                        )
                                    }
                                </small></span>
                            <h6>{this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_TITLE')}</h6>
                            <p>{this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_SUMMARY')}</p>
                            <a className="template-button template-button-primary-2" href="#blog" onClick={() => this.handlePopupShow(true)}>{this.props.language('blog.body.BLOG_SECTION_BUTTON')}</a>
                        </div>
                    </Col> 
                    <Col className="blog-box" xl={3} md={6}>
                        <div className="blog-box-item" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <Image className="blog-box-image" src={this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_THUMBNAIL')} fluid />
                            <span className="blog-box-item-author">
                                {this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_DATE')} | {' '}
                                <small>
                                    {this.props.languageLibrary.language === "tr"
                                        ?
                                        (
                                            <span>
                                                <b>
                                                    {this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR')}{' '}
                                                </b>
                                                {this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR_PREFIX')}
                                            </span>
                                        )
                                        :
                                        (
                                            <span>
                                                {this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR_PREFIX')}
                                                <b>
                                                    {' '}{this.props.language('blog.body.items.0.BLOG_SECTION_ITEMS_AUTHOR')}
                                                </b>
                                            </span>
                                        )
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