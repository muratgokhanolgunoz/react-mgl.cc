import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Home from './pages/Home'

import { BrowserRouter as Route, Switch } from 'react-router-dom'
import AdminProvider from '../../context/provider/AdminProvider'

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}))

const Admin = () => {
    const classes = useStyles()
    return (
        <div>
            <AdminProvider>
                <Switch>
                    <Route exact path="/admin/home">
                        <Home classes={classes} />
                    </Route>
                    <Route path="/admin/services">

                    </Route>
                    <Route path="/admin/about">

                    </Route>
                    <Route path="/admin/gallery">

                    </Route>
                    <Route path="/admin/schedule">

                    </Route>
                    <Route path="/admin/blog">

                    </Route>
                    <Route path="/admin/career">

                    </Route>
                    <Route path="/admin/contact">

                    </Route>
                </Switch>
            </AdminProvider>
        </div>
    );
}
export default Admin