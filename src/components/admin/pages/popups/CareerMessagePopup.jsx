import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'

const CareerMessagePopup = (props) => {
    return (
        <div >
            <Modal show={props.careerPopupStatus} onHide={() => props.setCareerPopupStatus(false)} centered size="lg">
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
}

CareerMessagePopup.propTypes = {
    selectedCareerItem: PropTypes.object.isRequired,
    careerPopupStatus: PropTypes.bool.isRequired,
    setCareerPopupStatus: PropTypes.func.isRequired
}

export default CareerMessagePopup