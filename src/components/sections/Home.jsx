import React, { Component, Fragment } from "react";
import carouselImageFirst from "../../assets/images/home/home_8.png";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div
                    id="home"
                    className="home"
                    style={{ backgroundImage: `url("${carouselImageFirst}")` }}
                ></div>
            </Fragment>
        );
    }
}
export default Home;
