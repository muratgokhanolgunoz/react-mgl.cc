import React, { Component, Fragment } from "react"
import { Modal, Button } from "react-bootstrap"
import Iframe from "react-iframe"

class TrackingPopup extends Component {
    render() {
        return (
            <Fragment>
                <Modal show={this.props.popupShow} onHide={() => this.props.popupShowToggle(false)} animation={false} size="lg" centered>
                    <Modal.Header>
                        <Button className="template-button template-button-danger pin-to-right" onClick={() => this.props.popupShowToggle(false)}>KAPAT</Button>
                    </Modal.Header>
                    <Modal.Body>
                        <Iframe className="iframe" src={this.props.iframeSrc} />
                    </Modal.Body>
                </Modal>
            </Fragment>
        );
    }
}
export default TrackingPopup
