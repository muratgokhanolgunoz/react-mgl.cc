import React, {Component, Fragment} from "react";

class Titles extends Component {
    render() {
        return (
            <Fragment>
                <p className={`${this.props.textAlign} ${this.props.color} `}>{this.props.subtitle}</p>
                <h2 className={`${this.props.textAlign} ${this.props.color}`}>{this.props.title}</h2>
                <p className={`${this.props.textAlign} ${this.props.fontSize} ${this.props.color} `}>{this.props.description}</p>
            </Fragment>
        );
    }
}
export default Titles
