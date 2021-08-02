import React, { Component } from "react"
import Context from "../Context"

class Provider extends Component {
    state = {
        videosPopupShowStatus: false,
        schedulePopupShowStatus: false,
        language: "TR"
    };

    render() {
        return (
            <Context.Provider
                value={{
                    state: this.state,
                    videosPopupShowStatusToggle: (modalShowStatus) => {
                        this.setState({ videosPopupShowStatus: modalShowStatus })
                    },
                    schedulePopupShowStatusToggle: (modalShowStatus) => {
                        this.setState({ schedulePopupShowStatus: modalShowStatus })
                    },
                    setLanguage: (language) => {
                        this.setState({ language: language })
                    }
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}
export default Provider
