import React, { Component, Fragment } from "react"
import Iframe from "react-iframe"
import { Row, Col, Modal, Button } from "react-bootstrap"

class GalleryPopup extends Component {
  render() {
    return (
      <Fragment>
        <Modal show={this.props.popupShow} onHide={() => this.props.popupShowToggle(false)} animation={false} size="lg" centered>
          <Modal.Header>
            <p className="text-light"> {" "} {this.props.propsCurrentVideo} / {" "} {this.props.propsVideosJson.length - 1}{" "} </p>
            <Button className="template-button template-button-danger border-0 pin-to-right" onClick={() => this.props.popupShowToggle(false)}>
              {this.props.language('template.buttons.TEMPLATE_CLOSE_BUTTON')}
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Iframe className="modal-videos-body-iframe" url={this.props.propsCurrentVideo !== undefined ? this.props.propsVideosJson[this.props.propsCurrentVideo].src : ""} allowFullScreen={true} />
            <br />
            <div>
              <Row>
                <Col>
                  {this.props.propsPreviousButtonValue !== undefined ? (
                    <Button className="template-button template-button-primary-2 pin-to-left" onClick={() => this.props.propsNaviationVideo(this.props.propsPreviousButtonValue)}>
                      {this.props.language('template.buttons.TEMPLATE_PREVIOUS_BUTTON')}
                    </Button>
                  ) : null}
                </Col>

                <Col>
                  {this.props.propsNextButtonValue !== undefined ? (
                    <Button className="template-button template-button-primary-2 pin-to-right" onClick={() => this.props.propsNaviationVideo(this.props.propsNextButtonValue)}>
                      {this.props.language('template.buttons.TEMPLATE_NEXT_BUTTON')}
                    </Button>
                  ) : null}
                </Col>
              </Row>
            </div>
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}
export default GalleryPopup;
