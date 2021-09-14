import React, { Component } from "react"
import PropTypes from "prop-types"
import Iframe from "react-iframe"
import { withTranslation } from "react-i18next"
import { Row, Col, Modal, Button } from "react-bootstrap"

class GalleryPopup extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.popupShow} onHide={() => this.props.popupShowToggle(false)} animation={false} size="lg" centered>
          <Modal.Header>
            <p className="text-light"> {" "} {this.props.propsCurrentVideo} / {" "} {this.props.propsVideosJson.length - 1}{" "} </p>
            <Button className="template-button template-button-danger border-0 pin-to-right" onClick={() => this.props.popupShowToggle(false)}>
              {this.props.t('template.buttons.TEMPLATE_CLOSE_BUTTON')}
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Iframe className="modal-videos-body-iframe" url={this.props.propsCurrentVideo !== 0 ? this.props.propsVideosJson[this.props.propsCurrentVideo].src : ""} allowFullScreen={true} title="Gallery" />
            <br />
            <div>
              <Row>
                <Col>
                  {this.props.propsPreviousButtonValue !== 0 ? (
                    <Button className="template-button template-button-primary-2 pin-to-left" onClick={() => this.props.propsNavigationVideo(this.props.propsPreviousButtonValue)}>
                      {this.props.t('template.buttons.TEMPLATE_PREVIOUS_BUTTON')}
                    </Button>
                  ) : null}
                </Col>

                <Col>
                  {this.props.propsNextButtonValue !== 0 ? (
                    <Button className="template-button template-button-primary-2 pin-to-right" onClick={() => this.props.propsNavigationVideo(this.props.propsNextButtonValue)}>
                      {this.props.t('template.buttons.TEMPLATE_NEXT_BUTTON')}
                    </Button>
                  ) : null}
                </Col>
              </Row>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

GalleryPopup.propTypes = {
  popupShow: PropTypes.bool.isRequired,
  popupShowToggle: PropTypes.func.isRequired,
  propsVideosJson: PropTypes.array.isRequired,
  propsPreviousButtonValue: PropTypes.number.isRequired,
  propsNextButtonValue: PropTypes.number.isRequired,
  propsCurrentVideo: PropTypes.number.isRequired,
  propsNavigationVideo: PropTypes.func.isRequired
}

export default withTranslation('translation')(GalleryPopup)
