import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Context from '../../../context/Context'
import { withTranslation } from 'react-i18next'
import { Button } from 'react-bootstrap'

class CookieBanner extends Component {
    render() {
        return (
            <div className="cookie-banner">
                <h5>{this.props.t('privacy.PRIVACY_HEADER')}</h5>
                <p>{this.props.t('privacy.PRIVACY_TEXT')}</p>
                <Button className="cookie_banner_button template-button template-button-primary-1" onClick={() => this.props.funcSetCookie(window.navigator.language.substr(0, 2).toLowerCase().toString())}>{this.props.t('privacy.PRIVACY_BUTTON')}</Button>
                <h6 onClick={() => this.context.setCookie({ language: null })}>{this.props.t('template.buttons.TEMPLATE_CLOSE_BUTTON')}</h6>
            </div>
        )
    }
}

CookieBanner.contextType = Context
CookieBanner.propTypes = {
    funcGetCookie: PropTypes.func.isRequired,
    funcSetCookie: PropTypes.func.isRequired
}

export default withTranslation('translation')(CookieBanner)