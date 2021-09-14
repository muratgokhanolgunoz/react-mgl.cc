import React, { Component } from 'react'
import Context from '../../../context/Context'
import CareerService from '../../../services/CareerService'
import { withTranslation } from 'react-i18next'
import { showToast, validateEmail } from '../../../core/functions'
import { Container, Row, Col, Image, Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { withStyles } from "@material-ui/core/styles"
import TextField from '@material-ui/core/TextField'
import { VscCheck } from "react-icons/vsc"
import { ToastContainer } from 'react-toastify'

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
        loadCaptchaEnginge(4)
    }

    handleChange = (e) => {
        this.setState({
            file: e.target.files[0]
        })
    }

    upload = () => {
        formError = false

        if (validateCaptcha(this.state.captcha) === true) {
            loadCaptchaEnginge(4)

            if (this.state.name === "") {
                showToast("bottom-right", this.props.t('career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_NAME'), "error")
                formError = true
            }

            if (this.state.surname === "") {
                showToast("bottom-right", this.props.t('career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_SURNAME'), "error")
                formError = true
            }

            if (this.state.email === "") {
                showToast("bottom-right", this.props.t('career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_EMAIL'), "error")
                formError = true
            }

            if (this.state.email !== "" && !validateEmail(this.state.email)) {
                showToast("bottom-right", this.props.t('career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_EMAIL_FORMAT'), "error")
                formError = true
            }

            if (this.state.phone === "") {
                showToast("bottom-right", this.props.t('career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_PHONE'), "error")
                formError = true
            }

            if (this.state.file === "") {
                showToast("bottom-right", this.props.t('career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_FILE'), "error")
                formError = true
            }

            if (this.state.file !== "" && this.state.file.size > 5242880) {
                showToast("bottom-right", this.props.t('career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_FILE_SIZE'), "error")
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
                payload.append('language', this.props.i18n.language)

                careerService.uploadCareer(payload)
                    .then((response) => {
                        response.data.result === true
                            ?
                            showToast("bottom-right", this.props.t('career.body.notification.CAREER_SECTION_NOTIFICATION_SUCCESS_MESSAGE'), "success")
                            :
                            showToast("bottom-right", this.props.t('career.body.notification.CAREER_SECTION_NOTIFICATION_ERROR_MESSAGE'), "error")

                        this.setState({
                            name: "",
                            surname: "",
                            email: "",
                            phone: "",
                            message: "",
                            file: ""
                        })
                    })
                    .catch(() => (
                        showToast("bottom-right", this.props.t('career.body.notification.CAREER_SECTION_NOTIFICATION_ERROR_MESSAGE'), "error")
                    ))
            }

            this.setState({
                captcha: ""
            })
        } else {
            showToast("bottom-right", this.props.t('career.body.notification.form_validation.CAREER_SECTION_NOTIFICATION_FORM_VALIDATION_ERROR_CAPTCHA'), "error")
            this.setState({
                captcha: ""
            })
        }
    }

    render() {
        return (
            <Context.Consumer>
                {(context) => {
                    return (
                        <div id="career" className="career section-padding" style={{ backgroundImage: `url("./assets/uploads/career/images/career_background.jpg")`, backgroundSize: "cover", backgroundPosition: "center center" }}>
                            <Container className="main">
                                <Row>
                                    <Col lg={6}>
                                        <Image src={"./assets/uploads/career/images/career_" + this.props.i18n.language + ".jpg"} alt="" fluid />
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
                                                        label={this.props.t('career.body.form.CAREER_SECTION_INPUT_NAME')}
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
                                                        label={this.props.t('career.body.form.CAREER_SECTION_INPUT_SURNAME')}
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
                                                        label={this.props.t('career.body.form.CAREER_SECTION_INPUT_EMAIL')}
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
                                                        label={this.props.t('career.body.form.CAREER_SECTION_INPUT_PHONE')}
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
                                                        label={this.props.t('career.body.form.CAREER_SECTION_INPUT_MESSAGE')}
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
                                                            <span style={{ paddingLeft: "5px" }}>{this.props.t('career.body.form.CAREER_SECTION_INPUT_FILE_HELP_FILE_TYPE')}&nbsp; : .pdf</span>
                                                            <br />
                                                            <span style={{ paddingLeft: "5px" }}>{this.props.t('career.body.form.CAREER_SECTION_INPUT_FILE_HELP_FILE_SIZE')}&nbsp; : 5 MB</span>
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
                                                        placeholder={this.props.t('career.body.form.CAREER_SECTION_CAPTCHA')}
                                                        value={this.state.captcha}
                                                        onChange={(e) => this.setState({ captcha: e.target.value })}>
                                                    </input>
                                                </Col>

                                                <Col xs={6}>
                                                    <Button className="pin-to-right template-button template-button-primary-2 template-button-box-shadow" onClick={() => this.upload()} >
                                                        <VscCheck size={14} /> &emsp; {this.props.t('career.body.form.CAREER_SECTION_BUTTON_SEND')}
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
            </Context.Consumer>
        )
    }
}
export default withTranslation('translation')(Career)