import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Iframe from "react-iframe"
import { withTranslation } from "react-i18next"
import { Modal, Button } from "react-bootstrap"

class WidgetPopup extends Component {
    render() {
        return (
            <Fragment>
                <Modal show={this.props.popupShow} onHide={() => this.props.popupShowToggle(false)} animation={false} size="lg" centered>
                    <Modal.Header>
                        <Button className="template-button template-button-danger pin-to-right" onClick={() => this.props.popupShowToggle(false)}>
                            {this.props.t('template.buttons.TEMPLATE_CLOSE_BUTTON')}
                        </Button>
                    </Modal.Header>
                    <Modal.Body>
                        <Iframe className="iframe" src={this.props.iframeSrc} />
                    </Modal.Body>
                </Modal>
            </Fragment>
        )
    }
}

WidgetPopup.propTypes = {
    iframeSrc: PropTypes.string.isRequired,
    popupShow: PropTypes.bool.isRequired,
    popupShowToggle: PropTypes.func.isRequired,
}

export default withTranslation('translation')(WidgetPopup)
