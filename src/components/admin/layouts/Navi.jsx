import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Navi = () => {
    return (
        <div>
            <Navbar bg="light" expand="sm">
                <Container>
                    <Navbar.Brand>
                        <Link to="/sarici2021">
                            <img src="https://mgl.cc/assets/img/logo.png" alt=""></img>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/sarici2021/blog" style={{ margin: "7px", textDecoration: "none", color: "gray" }}>Blog</Link>
                            <Link to="/sarici2021/career" style={{ margin: "7px", textDecoration: "none", color: "gray" }}>Career</Link>
                            <Nav.Link href="/">Frontend</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navi