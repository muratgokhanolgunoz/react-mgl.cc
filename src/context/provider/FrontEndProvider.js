import React, { Component } from "react"
import FrontEndContext from "../FrontEndContext"

class Provider extends Component {
    state = {
        baseUrl: "https://mgl.cc/gokhan/",
        language: "US",
        cookie: {
            languageAccept: false,
            language: undefined
        }
    };

    render() {
        return (
            <FrontEndContext.Provider value={{
                state: this.state,
                setLanguage: (_language) => {
                    this.setState({ language: _language })
                },
                setCookie: (_cookie) => [
                    this.setState({
                        cookie: {
                            languageAccept: _cookie.languageAccept,
                            language: _cookie.language
                        }
                    })
                ]
            }}>
                {this.props.children}
            </FrontEndContext.Provider>
        )
    }
}
export default Provider
