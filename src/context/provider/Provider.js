import React, { Component } from "react"
import Context from "../Context"

class Provider extends Component {
    state = {
        language: "US"
    };

    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                setLanguage: (language) => {
                    this.setState({ language: language })
                }
            }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
export default Provider
