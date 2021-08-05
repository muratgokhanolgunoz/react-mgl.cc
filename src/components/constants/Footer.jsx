import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class Footer extends Component {
    render() {

        let currentDate = new Date()

        return (
            <Fragment>                
                <div id="footer" className="footer">
                    <Container className="footer-inner">
                        <Row>
                            <Col><p>&copy;{' '}{currentDate.getFullYear()} {' '} {this.props.language('footer.FOOTER_TEXT')} </p></Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}
export default Footer