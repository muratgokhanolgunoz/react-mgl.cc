import React, { useEffect, useContext } from "react"
import FrontEndContext from "../../context/FrontEndContext"
import { useTranslation } from "react-i18next";

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

const FrontEnd = () => {

    AOS.init()
    const { t, i18n } = useTranslation('common')
    const context = useContext(FrontEndContext)

    useEffect(() => {
        defaultLanguageIsSet()
    }, [])

    const defaultLanguageIsSet = () => {
        let browserLanguage = i18n.language
        context.setLanguage(browserLanguage.toString().toUpperCase())
    }

    return (
        <FrontEndContext.Consumer>
            {(context) => {
                return (
                    <div>
                        <Helmet>
                            <title>{t('html.HTML_PAGE_TITLE')}</title>
                        </Helmet>

                        <Navi language={t} languageLibrary={i18n} />
                        <Home language={t} languageLibrary={i18n} />

                        <Container className="main">
                            <Services language={t} />
                        </Container>

                        <About language={t} />

                        <Container className="main">
                            <Gallery language={t} />
                        </Container>

                        <Schedule language={t} />

                        <Container>
                            <Blog language={t} languageLibrary={i18n} />
                        </Container>

                        <Career language={t} />
                        <Contact language={t} />
                        <Footer language={t} />
                    </div>
                )
            }}
        </FrontEndContext.Consumer>
    )
}
export default FrontEnd