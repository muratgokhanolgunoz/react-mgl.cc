import React, {Component, Fragment} from "react";

class Titles extends Component {
    render() {
        return (
            <Fragment>
                <h2 className={`${this.props.textAlign} ${this.props.color}`}>{this.props.title}</h2>
                <p className={`${this.props.textAlign} ${this.props.fontSize} ${this.props.color} `} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">{this.props.description}</p>
            </Fragment>
        );
    }
}
export default Titles;
