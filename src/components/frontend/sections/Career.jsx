import React, { Component } from 'react'
import FrontEndContext from '../../../context/FrontEndContext'
import Titles from './titles/Titles'

import { Container, Row, Col, Image, Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { withStyles } from "@material-ui/core/styles"
import TextField from '@material-ui/core/TextField'
import { VscCloudUpload, VscCheck } from "react-icons/vsc"

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
})(TextField)

class Career extends Component {
    render() {
        return (
            <FrontEndContext.Consumer>
                {(context) => {
                    return (
                        <div id="career" className="career section-padding" style={{ backgroundImage: `url("${context.state.baseUrl}uploads/career/career_background.jpg")`, backgroundSize: "cover", backgroundPosition: "center center"}}>
                            <Container className="main">
                                <Row>
                                    <Titles
                                        title={this.props.language('career.header.CAREER_SECTION_TITLE')}
                                        subtitle={this.props.language('career.header.CAREER_SECTION_SUBTITLE')}
                                        description={this.props.language('career.header.CAREER_SECTION_DESCRIPTION')}
                                        textAlign="text-center"
                                        color="text-dark"
                                        ontSize="section-title-description-font-size"
                                    />
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <Image src={this.props.language('career.body.CAREER_SECTION_PHOTO')} alt="" fluid />
                                    </Col>
                                    <Col lg={6}>
                                        <Form>
                                            <Row>
                                                <Col lg={12}>
                                                    <StyledTextField id="career-input-name" className="career-input" variant="filled" fullWidth required label={this.props.language('career.body.form.CAREER_SECTION_INPUT_NAME')} defaultValue="" />
                                                </Col>

                                            </Row>
                                            <Row>
                                                <Col lg={12}>
                                                    <StyledTextField id="career-input-surname" className="career-input" variant="filled" fullWidth required label={this.props.language('career.body.form.CAREER_SECTION_INPUT_SURNAME')} defaultValue="" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={12}>
                                                    <StyledTextField id="career-input-email" className="career-input" variant="filled" fullWidth required label={this.props.language('career.body.form.CAREER_SECTION_INPUT_EMAIL')} defaultValue="" />
                                                </Col>

                                            </Row>
                                            <Row>
                                                <Col lg={12}>
                                                    <StyledTextField id="career-input-phone" className="career-input" variant="filled" fullWidth required label={this.props.language('career.body.form.CAREER_SECTION_INPUT_PHONE')} defaultValue="" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={12}>
                                                    <StyledTextField id="career-input-message" className="career-input" variant="filled" fullWidth multiline rows={5} label={this.props.language('career.body.form.CAREER_SECTION_INPUT_MESSAGE')} defaultValue="" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={12}>
                                                    <input style={{ display: "none" }} accept="image/*" id="contained-button-file" multiple type="file" />
                                                    <label htmlFor="contained-button-file">
                                                        <Button className="career-input template-button template-button-primary-2" component="span">
                                                            <VscCloudUpload size={20} /> &emsp; {this.props.language('career.body.form.CAREER_SECTION_BUTTON_UPLOAD_FILE')}
                                                        </Button>
                                                    </label>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={12}>
                                                    <Button className="career-input template-button template-button-primary-2">
                                                        <VscCheck size={14} /> &emsp; {this.props.language('career.body.form.CAREER_SECTION_BUTTON_SEND')}
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )
                }}
            </FrontEndContext.Consumer>
        )
    }
}
export default Career