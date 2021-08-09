import React from 'react'
import AdminContext from '../../../context/AdminContext'
import Navi from '../constants/Navi'

import clsx from 'clsx'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`}{...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const Home = (props) => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <AdminContext.Consumer>
            {(context) => {
                return (
                    <div className={props.classes.root}>
                        <Navi classes={props.classes} />
                        <main className={clsx(props.classes.content, { [props.classes.contentShift]: context.state.sidebarOpen, })}>
                            <div className={props.classes.drawerHeader} />
                            <AppBar position="static" color="default">
                                <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="fullWidth" aria-label="full width tabs example"                                >
                                    <Tab label="Photos" {...a11yProps(0)} />
                                    <Tab label="Widgets" {...a11yProps(1)} />
                                </Tabs>
                            </AppBar>
                            <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={handleChangeIndex}>
                                <TabPanel value={value} index={0} dir={theme.direction}>
                                    <Paper elevation={3}>

                                    </Paper>
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                    <Paper elevation={3}>

                                    </Paper>
                                </TabPanel>
                            </SwipeableViews>
                        </main>
                    </div>
                )
            }}
        </AdminContext.Consumer>
    )
}
export default Home