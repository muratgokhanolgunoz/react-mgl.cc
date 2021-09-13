import React, { Component } from "react"
import FrontEndContext from "../../context/FrontEndContext"
import { withTranslation } from "react-i18next"
import HomeServices from "../../services/HomeService"
import Cookies from 'universal-cookie'
import Navi from "./layouts/Navi"
import Home from "./sections/Home"
import Services from "./sections/Services"
import About from "./sections/About"
import Gallery from "./sections/Gallery"
import Schedule from "./sections/Schedule"
import Blog from "./sections/Blog"
import Career from "./sections/Career"
import Contact from "./sections/Contact"
import Footer from './layouts/Footer'
import { Helmet } from "react-helmet"
import { Container } from "react-bootstrap"
import "../../assets/dist/css/template.css"
import "../../assets/dist/css/style.css"
import "react-toastify/dist/ReactToastify.css"

const cookies = new Cookies()

class FrontEnd extends Component {

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
                <FrontEndContext.Consumer>
                    {(context) => {
                        return (
                            <div>
                                <Helmet>
                                    <title>{this.props.t('html.HTML_PAGE_TITLE')}</title>
                                </Helmet>

                                <Navi funcSetCookie={this.setCookie} />
                                <Home funcSetCookie={this.setCookie} funcGetCookie={this.getCookie} />

                                <Container>
                                    <Services />
                                </Container>

                                <About />

                                <Container>
                                    <Gallery funcGetCookie={this.getCookie} />
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
                    }}
                </FrontEndContext.Consumer>
            </div>
        )
    }
}
FrontEnd.contextType = FrontEndContext
export default withTranslation('translation')(FrontEnd)