import React, { Component } from "react"
import { Container, Row, Col, Modal, Button, Image } from "react-bootstrap"

class BlogPopup extends Component {

    render() {
        return (
            <div>
                <Modal show={this.props.popupShow} fullscreen={true} onHide={() => this.props.popupShowToggle(false)} animation={false} size="lg" centered>
                    <Modal.Header>
                        <Button className="template-button template-button-danger pin-to-right" onClick={() => this.props.popupShowToggle(false)}>
                            {this.props.language('template.buttons.TEMPLATE_CLOSE_BUTTON')}
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
                                        <Col md={9}>
                                            <h1>{this.props.blogDetails.BLOG_SECTION_ITEMS_TITLE}</h1>
                                        </Col>
                                        <Col md={3}>
                                            <p style={{ textAlign: "right" }}><small>{this.props.blogDetails.BLOG_SECTION_ITEMS_DATE} | {this.props.blogDetails.BLOG_SECTION_ITEMS_AUTHOR}</small></p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <embed src={this.props.blogDetails.BLOG_SECTION_ITEMS_ARTICLE} />
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
export default BlogPopup
