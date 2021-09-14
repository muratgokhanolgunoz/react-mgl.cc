import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Blog from '../pages/Blog'
import Career from '../pages/Career'
import Home from '../pages/Home'
import NotFound from '../../errors/NotFound'

const Main = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/sarici2021">
                        <Home />
                    </Route>
                    <Route path="/sarici2021/blog">
                        <Blog />
                    </Route>
                    <Route path="/sarici2021/career">
                        <Career />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
export default Main