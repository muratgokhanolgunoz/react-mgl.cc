import React, { Component } from "react"
import FrontEndContext from "../FrontEndContext"

class Provider extends Component {
    state = {
        cookie: {
            languageAccept: false,
            language: undefined
        },
        blogs: []
    };

    render() {
        return (
            <FrontEndContext.Provider value={{
                state: this.state,
                setCookie: (_cookie) => {
                    this.setState({
                        cookie: {
                            languageAccept: _cookie.languageAccept,
                            language: _cookie.language
                        }
                    })
                },
                setBlogs: (_blogs) => {
                    this.setState({
                        blogs: _blogs
                    })
                }
            }}>
                {this.props.children}
            </FrontEndContext.Provider>
        )
    }
}
export default Provider
