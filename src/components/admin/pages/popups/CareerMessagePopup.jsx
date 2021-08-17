import React from 'react'
import { Modal } from 'react-bootstrap'
import AdminContext from '../../../../context/AdminContext'

const CareerMessagePopup = (props) => {
    return (
        <AdminContext.Consumer>
            {(context) => {
                return (
                    <div >
                        <Modal show={context.state.careerPopupStatus} onHide={() => context.setCareerPopupStatus(false)} centered size="lg">
                            <Modal.Header closeButton style={{ backgroundColor: "#fff", borderRadius: "0" }}>
                                <Modal.Title>
                                    {props.selectedCareerItem !== undefined
                                        ? props.selectedCareerItem.name + " " + props.selectedCareerItem.surname
                                        : null
                                    }
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ backgroundColor: "#fff" }}>
                                {props.selectedCareerItem !== undefined
                                    ? props.selectedCareerItem.message
                                    : null
                                }
                            </Modal.Body>
                        </Modal>
                    </div>
                )
            }}
        </AdminContext.Consumer>
    )
}
export default CareerMessagePopup