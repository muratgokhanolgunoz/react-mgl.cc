import React, { Component } from "react"
import Context from "../../../context/Context"
import { withTranslation } from "react-i18next"
import HomeServices from "../../../services/HomeService"
import Cookies from 'universal-cookie'
import CookieBanner from "./CookieBanner"
import Navi from "./Navi"
import Home from "../sections/Home"
import Services from "../sections/Services"
import About from "../sections/About"
import Gallery from "../sections/Gallery"
import Schedule from "../sections/Schedule"
import Blog from "../sections/Blog"
import Career from "../sections/Career"
import Contact from "../sections/Contact"
import Footer from './Footer'
import { Helmet } from "react-helmet"
import { Container } from "react-bootstrap"

import "../../../assets/dist/css/style.css"
import "react-toastify/dist/ReactToastify.css"

const cookies = new Cookies()

class Main extends Component {

    componentDidMount() {
        let homeServices = new HomeServices()
        homeServices.userLog()

        if (cookies.get('language') !== undefined) {
            if (cookies.get('language').substr(0, 2) === "en") {
                this.props.i18n.changeLanguage("us")
            } else {
                this.props.i18n.changeLanguage(cookies.get('language').substr(0, 2))
            }
        }
    }

    setCookie = (_language) => {
        var maxAge = new Date(Date.now() + (24 * 60 * 60 * 1000 * 365))
        cookies.set('language', _language, { path: '/', expires: maxAge })
        this.context.setCookie({
            language: _language,
        })
    }

    getCookie = () => {
        return {
            language: cookies.get('language')
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>{this.props.t('html.HTML_PAGE_TITLE')}</title>
                </Helmet>

                <Navi funcSetCookie={this.setCookie} />
                <Home />

                {
                    this.getCookie().language === undefined && this.context.state.cookie.language === undefined
                        ? <CookieBanner funcGetCookie={this.getCookie} funcSetCookie={this.setCookie} />
                        : null
                }

                <Container>
                    <Services />
                </Container>

                <About />

                <Container>
                    <Gallery />
                </Container>

                <Schedule />

                <Container>
                    <Blog />
                </Container>

                <Career />
                <Contact />
                <Footer />
            </div>
        )
    }
}
Main.contextType = Context
export default withTranslation('translation')(Main)