import React, { Component, Fragment } from "react"
import FrontEndProvider from "./context/provider/FrontEndProvider"

import Admin from './components/admin/Admin'
import FrontEnd from "./components/frontend/FrontEnd"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <Fragment>
        <FrontEndProvider>
          <Router basename="/">
            <Switch>
              <Route exact path="/">
                <FrontEnd />
              </Route>
              <Route path="/sarici">
                <Admin />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </FrontEndProvider>
      </Fragment>
    )
  }
}
export default App