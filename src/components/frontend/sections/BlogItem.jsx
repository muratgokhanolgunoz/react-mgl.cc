/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { Col, Image } from 'react-bootstrap'

class BlogItem extends Component {
    render() {

        const { blog, handlePopupShow, sendBlogInformation, t, i18n } = this.props

        return (
            <Fragment>
                <Col className="blog-box" xl={3} md={6} key={blog.BLOG_SECTION_ITEMS_ID}>
                    <div className="blog-box-item" onClick={() => { handlePopupShow(true); sendBlogInformation(blog) }}>
                        <Image className="blog-box-image" src={blog.BLOG_SECTION_ITEMS_THUMBNAIL} fluid />
                        <span className="blog-box-item-author">
                            <span>{blog.BLOG_SECTION_ITEMS_DATE.substr(0, 10)} | {' '}</span>
                            <span>
                                <small>
                                    {i18n.language === 'tr'
                                        ? <span><b>{blog.BLOG_SECTION_ITEMS_AUTHOR}{' '}</b>{t('blog.body.BLOG_SECTION_ITEMS_AUTHOR_PREFIX')}</span>
                                        : <span><b>{t('blog.body.BLOG_SECTION_ITEMS_AUTHOR_PREFIX')}{' '}</b>{blog.BLOG_SECTION_ITEMS_AUTHOR}</span>
                                    }
                                </small>
                            </span>
                        </span>
                        <h6>{blog.BLOG_SECTION_ITEMS_TITLE}</h6>
                        <p>{blog.BLOG_SECTION_ITEMS_SUMMARY} . . .</p>
                    </div>
                </Col>
            </Fragment>
        )
    }
}

BlogItem.propTypes = {
    blog: PropTypes.object.isRequired,
    handlePopupShow: PropTypes.func.isRequired,
    sendBlogInformation: PropTypes.func.isRequired
}

export default withTranslation('translation')(BlogItem)