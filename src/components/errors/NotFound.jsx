import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'

class NotFound extends Component {
    render() {
        return (
            <div>
                <h5 style={{ width: "100%", textAlign: "center", top: "40%", position: "absolute" }}>
                    <span style={{ fontSize: "60px" }}>404</span> <br /> {this.props.t('template.notification.errors.404')}
                </h5>
            </div>
        )
    }
}
export default withTranslation('translation')(NotFound)