import React, { Component, Fragment } from "react"
import Provider from "../context/provider/Provider"
import { withTranslation } from 'react-i18next'

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
import AOS from "aos"

import "../assets/dist/css/template.css"
import "../assets/dist/css/style.css"
import "aos/dist/aos.css"

class App extends Component {
  render() {

    const { t, i18n } = this.props

    AOS.init();

    return (
      <Provider>
        <Fragment>
          <Helmet>
            <title>Midas Global Logistik</title>
          </Helmet>

          <Navi language={t} languageLibrary={i18n} />
          <Home language={t} />

          <Container className="main">
            <Services language={t} />
          </Container>

          <About language={t} />

          <Container className="main">
            <Gallery language={t} />
          </Container>

          <Schedule language={t} />

          <Container>
            <Blog language={t} />
          </Container>

          <Career language={t} />
          <Contact language={t} />
          <Footer language={t} />
        </Fragment>
      </Provider>
    )
  }
}
export default withTranslation('common')(App)