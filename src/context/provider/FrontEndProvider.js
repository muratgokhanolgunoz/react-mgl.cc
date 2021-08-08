import React, { Component } from "react"
import FrontEndContext from "../FrontEndContext"

class Provider extends Component {
    state = {
        language: "US"
    };

    render() {
        return (
            <FrontEndContext.Provider value={{
                state: this.state,
                setLanguage: (_language) => {
                    this.setState({ language: _language })
                }
            }}>
                {this.props.children}
            </FrontEndContext.Provider>
        );
    }
}
export default Provider
