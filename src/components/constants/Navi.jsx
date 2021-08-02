import React, { Fragment } from "react"
import Context from '../../context/Context'
import ReactFlagsSelect from 'react-flags-select';
import { Container, Nav, Navbar, Image } from "react-bootstrap"
import logo from "../../assets/images/logo.png"

const Navi = () => {
    return (
        <Context.Consumer>
            {(context) => {
                return (
                    <Fragment>
                        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <Container>
                                <Navbar.Brand href="#home">
                                    <Image
                                        className="navi-logo"
                                        src={logo}
                                        alt="Midas Global Logistic"
                                        fluid
                                    ></Image>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto navi">
                                        <Nav.Link href="#services">Servİslerİmİz</Nav.Link>
                                        <Nav.Link className="navi-link" href="#about">Hakkımızda</Nav.Link>
                                        <Nav.Link href="#gallery">Galerİ</Nav.Link>
                                        <Nav.Link href="#schedule">Gemi Programı</Nav.Link>
                                        <Nav.Link href="#">Blog</Nav.Link>
                                        <Nav.Link href="#contact">İletİşİm</Nav.Link>
                                        <Nav.Link href="#contact">Karİyer</Nav.Link>
                                    </Nav>
                                    <Nav className="navi">
                                        <ReactFlagsSelect
                                            countries={["TR", "US", "CN", "IR", "SA"]}
                                            customLabels={{
                                                "TR": "TR",
                                                "US": "EN",
                                                "CN": "ZH",
                                                "IR": "FA",
                                                "SA": "AR"
                                            }}
                                            selected={context.state.language}
                                            onSelect={code => context.setLanguage(code)}
                                            optionsSize={13}
                                            selectedSize={15}
                                        />
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Fragment>
                )
            }}
        </Context.Consumer>
    );
};
export default Navi
