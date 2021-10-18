
import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withTranslation } from "react-i18next"
import elementsJSON from '../../../../tools/html_elements/elements.json'
import { Container, Row, Col, Modal, Button, Image } from "react-bootstrap"

let elements = elementsJSON

let arrayFindElements = []
let tempObject = {},
    tagOpenIndex = undefined,
    tagCloseIndex = undefined

class BlogPopup extends Component {

    componentDidMount() {
        this.parseTextToHMTL()
    }

    componentDidUpdate() {
        this.parseTextToHMTL()
    }

    parseTextToHMTL = () => {
        if (this.props.popupShow) {
            arrayFindElements = []
            elements.map((e) => (
                this.findElements(this.props.blogDetails.BLOG_SECTION_ITEMS_ARTICLE, e)
            ))            
            this.showArticle(this.props.blogDetails.BLOG_SECTION_ITEMS_ARTICLE, this.sortArray(arrayFindElements))
        }
    }

    tagIndexOf = (_article, _tag, _index) => {
        return _article.indexOf(_tag, _index)
    }

    findElements = (_article, _tag, _index = 0) => {
        tagOpenIndex = this.tagIndexOf(_article, _tag.tagOpen, _index)
        _index = tagOpenIndex

        if (_tag.tagClose !== null && _index > -1) {
            _index += _tag.tagOpen.length
            tagCloseIndex = this.tagIndexOf(_article, _tag.tagClose, _index)
            _index = tagCloseIndex
        }

        if (_index > -1) {
            tempObject = {
                "tag": _tag,
                "open": tagOpenIndex,
                "close": tagCloseIndex
            }
            arrayFindElements.push(tempObject)
            tempObject = {}
        }

        if (_article.length >= _index && _index > -1) {
            if (_tag.tagClose !== null) {
                _index += _tag.tagClose.length
                this.findElements(_article, _tag, _index)
            } else {
                _index += _tag.tagOpen.length
                this.findElements(_article, _tag, _index)
            }
        }
    }

    sortArray = (_array) => {
        return _array.sort((i, j) => {
            return i.open - j.open
        })
    }

    getArticleText = (_article, _start, _end) => {
        let result = ""
        for (let i = _start; i < _end; i++) {
            result += _article[i]
        }
        return result
    }

    showArticle = (_article, _elements) => {
        let index = 0
        let createSpan
        let createElement

        let createParagraph = document.createElement('p')

        if (_elements.length > 0) {
            for (let i = 0; i < _elements.length; i++) {
                createSpan = document.createElement('span')
                createSpan.innerHTML = this.getArticleText(_article, index, _elements[i].open)
                // console.log(this.getArticleText(_article, index, _elements[i].open))
                createParagraph.append(createSpan)

                if (_elements[i].tag.tagClose !== null) {
                    index = _elements[i].close + _elements[i].tag.tagClose.length
                } else {
                    index = _elements[i].open + _elements[i].tag.tagOpen.length
                }

                createSpan = document.createElement('span')
                createElement = document.createElement(_elements[i].tag.tagOpen.substr(1, _elements[i].tag.tagOpen.length - 2))

                if (_elements[i].tag.isContent === true) {
                    createElement.innerHTML = this.getArticleText(_article, _elements[i].open + _elements[i].tag.tagOpen.length, _elements[i].close)
                }

                createSpan.append(createElement)
                createParagraph.append(createSpan)
            }

            createSpan = document.createElement('span')
            createSpan.innerHTML = this.getArticleText(_article, index,_article.length)
            createParagraph.append(createSpan)

        } else {
            createParagraph.innerHTML = _article
        }

        document.getElementById("blog-popup-article").append(createParagraph)
    }

    render() {        
        return (
            <div>
                <Modal show={this.props.popupShow} fullscreen={true} onHide={() => this.props.popupShowToggle(false)} animation={false} size="lg" backdrop={true}>
                    <Modal.Header>
                        <Button className="template-button template-button-danger pin-to-right" onClick={() => this.props.popupShowToggle(false)}>
                            {this.props.t('template.buttons.TEMPLATE_CLOSE_BUTTON')}
                        </Button>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col className="modal-blog-preview-body" lg={{ span: 8, offset: 2 }} md={12}>
                                    <Row>
                                        <Image className="modal-blog-preview-body-image" src={this.props.blogDetails.BLOG_SECTION_ITEMS_PHOTO} alt="" fluid />
                                        <Image className="modal-blog-preview-body-thumbnail" src={this.props.blogDetails.BLOG_SECTION_ITEMS_THUMBNAIL} alt="" fluid />
                                    </Row>
                                    <Row>
                                        <Col md={12} style={{ marginTop: "-20px" }}>
                                            <p style={{ textAlign: "right" }}><small>{this.props.blogDetails.BLOG_SECTION_ITEMS_DATE !== undefined ? this.props.blogDetails.BLOG_SECTION_ITEMS_DATE.substr(0, 10) : null} | {this.props.blogDetails.BLOG_SECTION_ITEMS_AUTHOR}</small></p>
                                        </Col>
                                        <Col md={12} style={{ marginTop: "-40px" }}>
                                            <h1>{this.props.blogDetails.BLOG_SECTION_ITEMS_TITLE}</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div id="blog-popup-article"></div>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

BlogPopup.propTypes = {
    popupShow: PropTypes.bool.isRequired,
    popupShowToggle: PropTypes.func.isRequired,
    blogDetails: PropTypes.object.isRequired
}

export default withTranslation('translation')(BlogPopup)
