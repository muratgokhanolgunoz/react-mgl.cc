import React, { Component } from "react"
import { withTranslation } from "react-i18next"
import { Container, Row, Col, Modal, Button, Image } from "react-bootstrap"

class BlogPopup extends Component {

    render() {
        return (
            <div>
                <Modal show={this.props.popupShow} fullscreen={true} onHide={() => this.props.popupShowToggle(false)} animation={false} size="lg" centered>
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
                                            <p style={{ textAlign: "right" }}><small>{this.props.blogDetails.BLOG_SECTION_ITEMS_DATE !== undefined ? this.props.blogDetails.BLOG_SECTION_ITEMS_DATE.substr(0, 10) : null } | {this.props.blogDetails.BLOG_SECTION_ITEMS_AUTHOR}</small></p>
                                        </Col>
                                        <Col md={12} style={{ marginTop: "-40px" }}>
                                            <h1>{this.props.blogDetails.BLOG_SECTION_ITEMS_TITLE}</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <p>{this.props.blogDetails.BLOG_SECTION_ITEMS_ARTICLE}</p>
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
export default withTranslation('translation')(BlogPopup)
