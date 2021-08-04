import React, { Component, Fragment } from 'react'
import Contact from '../sections/Contact'
import { Container, Row, Col } from 'react-bootstrap'

class Footer extends Component {
    render() {

        let currentDate = new Date()

        return (
            <Fragment>
                <Contact />
                <div id="footer" className="footer">
                    <Container className="footer-inner">
                        <Row>
                            <Col><p>&copy;{' '}{currentDate.getFullYear()}{' '}Midas Global Logistik. Tüm hakları saklıdır.</p></Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}
export default Footer