import React from 'react'
import AdminContext from '../../../context/AdminContext'
import Navi from '../constants/Navi'

import clsx from 'clsx'

const Career = (props) => {
    return (
        <AdminContext.Consumer>
            {(context) => {
                return (
                    <div className={props.classes.root}>
                        <Navi classes={props.classes} />
                        <main className={clsx(props.classes.content, { [props.classes.contentShift]: context.state.sidebarOpen, })}>
                            <div className={props.classes.drawerHeader} />
                            
                        </main>
                    </div>
                )
            }}
        </AdminContext.Consumer>
    )
}
export default Career