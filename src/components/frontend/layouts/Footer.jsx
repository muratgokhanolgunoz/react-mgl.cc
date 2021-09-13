import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { withTranslation } from 'react-i18next'

class Footer extends Component {
    render() {

        let currentDate = new Date()

        return (
            <div id="footer" className="footer">
                <Container className="footer-inner">
                    <Row>
                        <Col lg={6} md={6}><p>&copy;{' '}{currentDate.getFullYear()} {' '} {this.props.t('footer.FOOTER_TEXT')} </p></Col>
                        <Col className="social-media-links" lg={6} md={6}>
                            <ul>                               
                                <li><a href="https://www.linkedin.com/company/midasgloballojistik/" target="_blank" rel="noreferrer">Linkedin</a></li>
                                <li><a href="https://www.instagram.com/midasgloballojistik/" target="_blank" rel="noreferrer">Instagram</a></li>
                                <li><a href="https://www.youtube.com/channel/UCaq2ysv2s5Gi-B_SY6Hg_Tw" target="_blank" rel="noreferrer">YouTube</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default withTranslation('translation')(Footer)