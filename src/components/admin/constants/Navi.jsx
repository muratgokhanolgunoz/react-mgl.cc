import React from 'react'
import { useTheme } from '@material-ui/core/styles';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { VscArrowRight } from "react-icons/vsc";

import { Link } from 'react-router-dom'
import AdminContext from '../../../context/AdminContext';

const Navi = (props) => {

    const theme = useTheme();   

    return (
        <AdminContext.Consumer>
            {(context) => {
                return(
                    <div>
                        <AppBar position="fixed" className={clsx(props.classes.appBar, { [props.classes.appBarShift]: context.state.sidebarOpen, })}>
                            <Toolbar>
                                <IconButton color="inherit" aria-label="open drawer" onClick={() => context.setSidebarShowStatus(true)} edge="start" className={clsx(props.classes.menuButton, { [props.classes.hide]: context.state.sidebarOpen, })}>
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" noWrap>
                                    Admin | Midas Global Logistics
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <Drawer className={props.classes.drawer} variant="persistent" anchor="left" open={context.state.sidebarOpen} classes={{ paper: props.classes.drawerPaper, }}>
                            <div className={props.classes.drawerHeader}>
                                <IconButton onClick={() => context.setSidebarShowStatus(false)}>
                                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                </IconButton>
                            </div>
                            <Divider />
                            <List component="nav" aria-label="main mailbox folders">
                                <ListItem button>
                                    <ListItemIcon>
                                        <VscArrowRight />
                                    </ListItemIcon>
                                    <ListItemText >
                                        <Link className="admin-sidebar-link" to="/admin">Home</Link>
                                    </ListItemText>
                                </ListItem>

                                <ListItem button>
                                    <ListItemIcon>
                                        <VscArrowRight />
                                    </ListItemIcon>
                                    <ListItemText >
                                        <Link className="admin-sidebar-link" to="/admin/services">Services</Link>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Drawer>
                    </div>
                )  
            }}
        </AdminContext.Consumer>        
    )
}
export default Navi