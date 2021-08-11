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
          {/* <Router>
            <Switch>
              <Route exact path="/">
                <FrontEnd />
              </Route>
              <Route path="/sarici">
                <Admin />
              </Route>
            </Switch>
          </Router> */}
          <FrontEnd />
        </FrontEndProvider>
      </Fragment>
    )
  }
}
export default App