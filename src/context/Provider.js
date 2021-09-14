import React, { Component } from "react"
import Context from "./Context"

class Provider extends Component {
    state = {
        cookie: {
            language: undefined
        },
        blogs: []
    };

    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                setCookie: (_cookie) => {
                    this.setState({
                        cookie: {
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
            </Context.Provider>
        )
    }
}
export default Provider
