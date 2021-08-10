import React, { Component, Fragment } from "react"
import FrontEndContext from "../../context/FrontEndContext"
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

import "../../assets/dist/css/template.css"
import "../../assets/dist/css/style.css"
import "aos/dist/aos.css"

let blogItems = []

class FrontEnd extends Component {

    componentDidMount() {
        this.defaultLanguageIsSet()
    }

    // Every render this component clear array
    componentDidUpdate() {
        blogItems = []
    }

    defaultLanguageIsSet() {
        let browserLanguage = this.props.i18n.language
        this.context.setLanguage(browserLanguage.toString().toUpperCase())
    }

    render() {

        AOS.init()
        const { t, i18n } = this.props

        // Check for blog items lenght pushing data in array
        t('blog.body.items', { returnObjects: true }).map(blog => (
            blogItems.push(blog)
        ))

        return (
            <Fragment>
                <Helmet>
                    <title>{t('html.HTML_PAGE_TITLE')}</title>
                </Helmet>

                <Navi language={t} languageLibrary={i18n} articlesShowStatus={blogItems.length > 0 ? true : false} />
                <Home language={t} />

                <Container className="main">
                    <Services language={t} />
                </Container>

                <About language={t} />

                <Container className="main">
                    <Gallery language={t} />
                </Container>

                <Schedule language={t} />

                { blogItems.length > 0
                    ?
                    <Container>
                        <Blog language={t} languageLibrary={i18n} />
                    </Container>
                    :
                    null
                }

                <Career language={t} />
                <Contact language={t} />
                <Footer language={t} />
            </Fragment>
        )
    }
}
FrontEnd.contextType = FrontEndContext
export default withTranslation('common')(FrontEnd)