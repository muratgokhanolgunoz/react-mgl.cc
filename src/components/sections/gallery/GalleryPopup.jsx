import React, { Component, Fragment } from "react";
import Context from "../../../context/Context.js";
import Iframe from "react-iframe";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { VscArrowRight, VscArrowLeft, VscChromeClose } from "react-icons/vsc";

class GalleryPopup extends Component {
  render() {
    return (
      <Context.Consumer>
        {(context) => {
          return (
            <Fragment>
              <Modal show={context.state.videosModalShow} onHide={() => context.videosModalToggle(false)} animation={false} size="lg" centered>
                <Modal.Header>
                  <p className="text-light"> {" "} {this.props.propsCurrentVideo + 1} / {" "} {this.props.propsVideosJson.length}{" "} </p>
                  <Button className="template-button template-button-danger pin-to-right" onClick={() => context.videosModalToggle(false)}>
                    <VscChromeClose className="modal-videos-close-button-icon" /> {" "} CLOSE
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
                            <VscArrowLeft /> PREVIOUS
                          </Button>
                        ) : null}
                      </Col>

                      <Col>
                        {this.props.propsNextButtonValue !== undefined ? (
                          <Button className="template-button template-button-primary-2 pin-to-right" onClick={() => this.props.propsNaviationVideo(this.props.propsNextButtonValue)}>
                            NEXT {"  "} <VscArrowRight />
                          </Button>
                        ) : null}
                      </Col>
                    </Row>
                  </div>
                </Modal.Body>
              </Modal>
            </Fragment>
          );
        }}
      </Context.Consumer>
    );
  }
}
export default GalleryPopup;
