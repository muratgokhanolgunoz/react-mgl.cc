import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"

class Titles extends Component {
    render() {
        return (
            <Fragment>
                <p className={`${this.props.textAlign} ${this.props.color} `}>{this.props.subtitle}</p>
                <h2 className={`${/*this.props.color === "text-light" ? "section-title-white" : "section-title-primary-2"*/""} ${this.props.textAlign} ${this.props.color}`}>{this.props.title}</h2>
                <p className={`${this.props.textAlign} ${this.props.fontSize} ${this.props.color} `}>{this.props.description}</p>
                {
                    this.props.lineStatus === true ? <span className={this.props.color === "text-light" ? "title-line-white" : "title-line-primary-2"}></span> : null
                }
            </Fragment>
        );
    }
}

Titles.defaultProps = {
    textAlign: "text-center",
    color: "text-primary-2",
    fontSize: "section-title-description-font-size",
    subtitle: "",
    title: "",
    description: "",
    lineStatus: true
}

Titles.propTypes = {
    textAlign: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lineStatus: PropTypes.bool.isRequired
}

export default Titles
