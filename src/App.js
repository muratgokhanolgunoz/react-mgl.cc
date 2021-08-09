import React, { Component, Fragment } from "react"
import FrontEndProvider from "./context/provider/FrontEndProvider"

import Admin from './components/admin/Admin'
import FrontEnd from "./components/frontend/FrontEnd"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <FrontEndProvider>
          <FrontEnd />
        </FrontEndProvider>
      </Fragment>
    )
  }
}
export default App