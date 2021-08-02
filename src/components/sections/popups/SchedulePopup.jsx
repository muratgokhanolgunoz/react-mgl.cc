import React, { Component, Fragment } from "react";
import Context from "../../../context/Context.js";
import { Row, Col, Modal, Button } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import { VscChromeClose, VscCheck } from "react-icons/vsc";

class GalleryPopup extends Component {
    render() {
        return (
            <Context.Consumer>
                {(context) => {
                    return (
                        <Fragment>
                            <Modal show={context.state.schedulePopupShowStatus} onHide={() => context.schedulePopupShowStatusToggle(false)} animation={false} size="md" centered>
                                <Modal.Header>
                                    <Button className="template-button template-button-danger pin-to-right" onClick={() => context.schedulePopupShowStatusToggle(false)}>
                                        <VscChromeClose className="modal-videos-close-button-icon" /> {" "} CLOSE
                                    </Button>
                                </Modal.Header>
                                <Modal.Body>
                                    <form className="schedule-form" noValidate autoComplete="off">
                                        <Row className="schedule-form-rows">
                                            <Col lg={6} sm={12}>
                                                <TextField id="name" size="small" label="Adınız" className="schedule-form-inputs" required/>
                                            </Col>
                                            <Col lg={6} sm={12}>
                                                <TextField id="surname" size="small" label="Soyadınız" className="schedule-form-inputs" required/>
                                            </Col>
                                        </Row>
                                        <Row className="schedule-form-rows">
                                            <Col sm={12}>
                                                <TextField id="compony_name" size="small" label="Firma Adı" className="schedule-form-inputs" required/>
                                            </Col>
                                        </Row>
                                        <Row className="schedule-form-rows">
                                            <Col lg={6} sm={12}>
                                                <TextField id="email" size="small" label="Email" className="schedule-form-inputs" required/>
                                            </Col>
                                            <Col lg={6} sm={12}>
                                                <TextField id="phone" size="small" label="Telefon" className="schedule-form-inputs" required/>
                                            </Col>
                                        </Row>
                                        <Row className="schedule-form-rows">
                                            <Col lg={4} sm={12}>
                                                <TextField id="volume" size="small" label="Hacim (m³)" className="schedule-form-inputs" type="number" required/>
                                            </Col>
                                            <Col lg={4} sm={12}>
                                                <TextField id="weight" size="small" label="Ağırlık (kg)" className="schedule-form-inputs" type="number" required/>
                                            </Col>
                                            <Col lg={4} sm={12}>
                                                <TextField id="number_of_containers" size="small" label="Kap Sayısı" className="schedule-form-inputs" type="number" required/>
                                            </Col>
                                        </Row>
                                        <Row className="schedule-form-rows">
                                            <Col sm={12}>
                                                <TextField id="note" size="small" label="Ölçütler / Not" className="schedule-form-inputs" multiline rows={3} required/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Button className="template-button template-button-primary-2 mt-3 d-block m-auto">
                                                <VscCheck /> {' '} Rezervasyon
                                            </Button>
                                        </Row>
                                    </form>
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
