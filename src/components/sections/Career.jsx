import React, { Component, Fragment } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Container, Row, Col, Image, Form } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';

import careerBackgroundPhoto from '../../assets/images/career/career_background.jpg'
import careerPhotoTr from '../../assets/images/career/career_tr.jpg'
import careerPhotoEn from '../../assets/images/career/career_en.jpg'

import { Button } from 'react-bootstrap';
import { VscCloudUpload, VscCheck } from "react-icons/vsc";

const StyledTextField = withStyles({
    root: {
        "& .MuiInputBase-root": {
            color: "#f5f5f5"
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f5f5f5"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#f5f5f5"
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#f5f5f5"
        }
    },
})(TextField);

class Career extends Component {
    render() {

        const careerStyles = {
            backgroundImage: `url("${careerBackgroundPhoto}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
        }

        return (
            <Fragment>
                <div id="career" className="career section-padding" style={careerStyles}>
                    <Container className="main">                       
                        <Row>
                            <Col lg={6}>
                                <Image src={careerPhotoTr} alt="" fluid />
                            </Col>
                            <Col lg={6}>
                                <Form>
                                    <Row>
                                        <Col lg={12}>
                                            <StyledTextField className="career-input" variant="filled" fullWidth required id="standard-required" label="Adınız" defaultValue="" />
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <StyledTextField className="career-input" variant="filled" fullWidth required id="standard-required" label="Soyadınız" defaultValue="" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <StyledTextField className="career-input" variant="filled" fullWidth required id="standard-required" label="Eposta Adresiniz" defaultValue="" />
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <StyledTextField className="career-input" variant="filled" fullWidth required id="standard-required" label="Telefon Numaranız" defaultValue="" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <StyledTextField className="career-input" variant="filled" fullWidth multiline rows={5} id="standard-required" label="Bize Mesajınız" defaultValue="" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <input style={{ display: "none" }} accept="image/*" id="contained-button-file" multiple type="file" />
                                            <label htmlFor="contained-button-file">
                                                <Button className="career-input template-button template-button-primary-2" component="span">
                                                    <VscCloudUpload size={20} />&emsp;CV Yükle
                                                </Button>
                                            </label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <Button className="career-input template-button template-button-primary-2">
                                                <VscCheck size={14} />&emsp;Gönder
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}
export default Career