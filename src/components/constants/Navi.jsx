import React, { Fragment } from 'react'
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap'
import logo from '../../assets/images/logo.png'
import '../../assets/dist/css/style.css'

const Navi = () => {
    return (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image className="navi-logo" src={logo} alt="Midas Global Logistic" fluid></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navi">
                            <Nav.Link href="#services">Servislerimiz</Nav.Link>
                            <Nav.Link className="navi-link" href="#about">Hakkımızda</Nav.Link>
                            <Nav.Link href="#gallery">Galeri</Nav.Link>
                            <Nav.Link href="#booking">Gemi Programı</Nav.Link>
                            <Nav.Link href="#">e-Navlun</Nav.Link>
                            <Nav.Link href="#">e-Takip</Nav.Link>
                            <Nav.Link href="#contact">İletişim</Nav.Link>
                        </Nav>
                        <Nav className="navi">
                            <NavDropdown title="TR">
                                <NavDropdown.Item href="#action/3.1">TR</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">EN</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">ZH</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">FA</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">AR</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
}
export default Navi