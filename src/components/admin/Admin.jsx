import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminProvider from '../../context/provider/AdminProvider'
import Blog from './pages/Blog'
import Career from './pages/Career'
import Home from './pages/Home'
import NotFound from '../NotFound';

const Admin = () => {
    return (
        <div>
            <AdminProvider>
                <Router>
                    <Switch>
                        <Route exact path="/sarici">
                            <Home />
                        </Route>
                        <Route path="/sarici/blog">
                            <Blog />
                        </Route>
                        <Route path="/sarici/career">
                            <Career />
                        </Route>
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </AdminProvider>
        </div>
    );
}
export default Admin