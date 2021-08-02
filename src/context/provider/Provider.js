import React, { Component } from "react"
import Context from "../Context"

class Provider extends Component {
    state = {
        videosModalShow: false,
    };

    render() {
        return (
            <Context.Provider
                value={{
                    state: this.state,
                    videosModalToggle: (modalStatus) => {
                        this.setState({ videosModalShow: modalStatus })
                    },
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}
export default Provider
