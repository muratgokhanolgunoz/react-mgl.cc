import React, { Component } from "react"
import FrontEndContext from "../../context/FrontEndContext"
import { withTranslation } from "react-i18next"
import HomeServices from "../../services/HomeService"

import Navi from "./constants/Navi"
import Home from "./sections/Home"
import Services from "./sections/Services"
import About from "./sections/About"
import Gallery from "./sections/Gallery"
import Schedule from "./sections/Schedule"
import Blog from "./sections/Blog"
import Career from "./sections/Career"
import Contact from "./sections/Contact"
import Footer from './constants/Footer'

import { Helmet } from "react-helmet"
import { Container } from "react-bootstrap"

import "../../assets/dist/css/template.css"
import "../../assets/dist/css/style.css"
import "react-toastify/dist/ReactToastify.css"

class FrontEnd extends Component {

    componentDidMount() {
        let homeServices = new HomeServices()
        homeServices.userLog()
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

                                <Navi />
                                <Home />

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
                    }}
                </FrontEndContext.Consumer>
            </div>
        )
    }
}
export default withTranslation('translation')(FrontEnd)