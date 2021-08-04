import React, { Component, Fragment } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutImage from "../../assets/images/about/about3.png";
import Titles from "./titles/Titles";

class About extends Component {
    render() {
        return (
            <Fragment>
                <div id="about" className="about section-padding">
                    <Container>
                        <Row>
                            <Col lg={6} md={12}>
                                <Image src={aboutImage} alt="" fluid data-aos="flip-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"></Image>
                            </Col>
                            <Col lg={6} md={12}>
                                <Titles title="Hakkımızda" subtitle="" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." textAlign="text-left" color="text-dark" fontSize="section-title-description-font-size" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}
export default About;
