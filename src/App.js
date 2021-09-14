import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Provider from "./context/Provider"
import Admin from './components/admin/layouts/Main'
import FrontEnd from "./components/frontend/layouts/Main"
import NotFound from "./components/errors/NotFound"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider>
          <Router basename="/">
            <Switch>
              <Route exact path="/">
                <FrontEnd />
              </Route>
              <Route path="/sarici2021">
                <Admin />
              </Route>              
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </Fragment>
    )
  }
}
export default App