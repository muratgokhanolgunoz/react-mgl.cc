import React, { Component } from 'react'
import CareerService from '../../../services/CareerService'
import FrontEndContext from '../../../context/FrontEndContext'
import Titles from './titles/Titles'

import { Container, Row, Col, Image, Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { withStyles } from "@material-ui/core/styles"
import TextField from '@material-ui/core/TextField'
import { VscCheck } from "react-icons/vsc"

import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha'

let careerService = new CareerService()
let formError

const StyledTextField = withStyles({
    root: {
        "& .MuiInputBase-root": {
            backgroundColor: "rgba(232, 232, 232, .3)",
            borderRadius: "0",
            borderColor: "rgba(232, 232, 232, .3)"
        },
        '& label.Mui-focused': {
            color: '#000',
            borderColor: "rgba(232, 232, 232, .3)"
        }
    },
})(TextField)

class Career extends Component {

    state = {
        name: "",
        surname: "",
        email: "",
        phone: "",
        message: "",
        file: "",
        captcha: ""
    }

    componentDidMount() {
        loadCaptchaEnginge(6)
    }

    handleChange = (e) => {
        this.setState({
            file: e.target.files[0]
        })
    }

    showToast = (_position, _text, _type) => {
        toast(_text, {
            position: _position,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type: _type
        })
    }

    validateEmail(_email) {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(_email);
    }

    upload = () => {
        formError = false

        if (validateCaptcha(this.state.captcha) === true) {
            loadCaptchaEnginge(6)

            if (this.state.name === "") {
                this.showToast("bottom-right", this.props.language('career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_NAME'), "error")
                formError = true
            }

            if (this.state.surname === "") {
                this.showToast("bottom-right", this.props.language('career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_SURNAME'), "error")
                formError = true
            }

            if (this.state.email === "") {
                this.showToast("bottom-right", this.props.language('career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_EMAIL'), "error")
                formError = true
            }

            if (this.state.email !== "" && !this.validateEmail(this.state.email)) {
                this.showToast("bottom-right", this.props.language('career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_EMAIL_FORMAT'), "error")
                formError = true
            }

            if (this.state.phone === "") {
                this.showToast("bottom-right", this.props.language('career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_PHONE'), "error")
                formError = true
            }

            if (this.state.file === "") {
                this.showToast("bottom-right", this.props.language('career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_FILE'), "error")
                formError = true
            }

            if (this.state.file !== "" && this.state.file.size > 5242880) {
                this.showToast("bottom-right", this.props.language('career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_FILE_SIZE'), "error")
                formError = true
            }

            if (formError === false) {
                const payload = new FormData()
                payload.append('name', this.state.name)
                payload.append('surname', this.state.surname)
                payload.append('email', this.state.email)
                payload.append('phone', this.state.phone)
                payload.append('message', this.state.message)
                payload.append('file', this.state.file)

                careerService.uploadCareer(payload)
                    .then((response) => {
                        response.data.result === true
                            ?
                            this.showToast("bottom-right", this.props.language('career.body.notification.CAREER_SECTION_NOTIFICATION_SUCCESS_MESSAGE'), "success")
                            :
                            this.showToast("bottom-right", this.props.language('career.body.notification.CAREER_SECTION_NOTIFICATION_ERROR_MESSAGE'), "error")

                        this.setState({
                            name: "",
                            surname: "",
                            email: "",
                            phone: "",
                            message: "",
                            file: "",
                            captcha: ""
                        })
                    })
                    .catch(() => (
                        this.showToast("bottom-right", this.props.language('career.body.notification.CAREER_SECTION_NOTIFICATION_ERROR_MESSAGE'), "error")
                    ))
            }
        } else {
            this.showToast("bottom-right", this.props.language('career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_CAPTCHA'), "error")
        }
    }

    render() {
        return (
            <FrontEndContext.Consumer>
                {(context) => {
                    return (
                        <div id="career" className="career section-padding" style={{ backgroundImage: `url("${context.state.baseUrl}uploads/career/career_background.jpg")`, backgroundSize: "cover", backgroundPosition: "center center" }}>
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
                                        <form onSubmit={this.submitHandler} encType="multipart/form-data">
                                            <Row>
                                                <Col lg={12}>
                                                    <StyledTextField
                                                        id="career-input-name"
                                                        className="career-input"
                                                        variant="filled"
                                                        fullWidth
                                                        required
                                                        label={this.props.language('career.body.form.CAREER_SECTION_INPUT_NAME')}
                                                        value={this.state.name}
                                                        size="small"
                                                        onChange={(e) => this.setState({ name: e.target.value })} />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={12}>
                                                    <StyledTextField
                                                        id="career-input-surname"
                                                        className="career-input"
                                                        variant="filled"
                                                        fullWidth
                                                        required
                                                        label={this.props.language('career.body.form.CAREER_SECTION_INPUT_SURNAME')}
                                                        value={this.state.surname}
                                                        size="small"
                                                        onChange={(e) => this.setState({ surname: e.target.value })} />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={12}>
                                                    <StyledTextField
                                                        id="career-input-email"
                                                        className="career-input"
                                                        variant="filled"
                                                        fullWidth
                                                        required
                                                        label={this.props.language('career.body.form.CAREER_SECTION_INPUT_EMAIL')}
                                                        value={this.state.email}
                                                        size="small"
                                                        onChange={(e) => this.setState({ email: e.target.value })}
                                                    />
                                                </Col>

                                            </Row>
                                            <Row>
                                                <Col lg={12}>
                                                    <StyledTextField
                                                        id="career-input-phone"
                                                        className="career-input"
                                                        variant="filled"
                                                        fullWidth
                                                        required
                                                        label={this.props.language('career.body.form.CAREER_SECTION_INPUT_PHONE')}
                                                        value={this.state.phone}
                                                        size="small"
                                                        onChange={(e) => this.setState({ phone: e.target.value })}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={12}>
                                                    <StyledTextField
                                                        id="career-input-message"
                                                        className="career-input"
                                                        variant="filled"
                                                        fullWidth
                                                        multiline
                                                        rows={5}
                                                        maxLength={400}
                                                        label={this.props.language('career.body.form.CAREER_SECTION_INPUT_MESSAGE')}
                                                        value={this.state.message}
                                                        size="small"
                                                        onChange={(e) => this.setState({ message: e.target.value })}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={12}>
                                                    <Form.Group>
                                                        <input
                                                            id="input-upload"
                                                            type="file"
                                                            name="file"
                                                            accept=".pdf"
                                                            onChange={this.handleChange}
                                                            className="form-control"
                                                        />
                                                        <Form.Text className="text-light">
                                                            <span style={{ paddingLeft: "5px" }}>{this.props.language('career.body.form.CAREER_SECTION_INPUT_FILE_HELP_FILE_TYPE')}&nbsp; : .pdf</span>
                                                            <br />
                                                            <span style={{ paddingLeft: "5px" }}>{this.props.language('career.body.form.CAREER_SECTION_INPUT_FILE_HELP_FILE_SIZE')}&nbsp; : 5 MB</span>
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={6} style={{ paddingLeft: "17px" }}>
                                                    <LoadCanvasTemplateNoReload />
                                                    <input
                                                        id="input-captcha"
                                                        className="form-control"
                                                        type="text"
                                                        placeholder={this.props.language('career.body.form.CAREER_SECTION_CAPTCHA')}
                                                        onChange={(e) => this.setState({ captcha: e.target.value })}>
                                                    </input>
                                                </Col>

                                                <Col xs={6}>
                                                    <Button className="pin-to-right template-button template-button-primary-2" onClick={() => this.upload()} >
                                                        <VscCheck size={14} /> &emsp; {this.props.language('career.body.form.CAREER_SECTION_BUTTON_SEND')}
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </form>
                                    </Col>
                                </Row>
                            </Container>

                            <ToastContainer />
                        </div>
                    )
                }}
            </FrontEndContext.Consumer>
        )
    }
}
export default Career