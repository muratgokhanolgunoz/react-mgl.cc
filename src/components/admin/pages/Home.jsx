import React from 'react'
import Navi from '../constants/Navi'

const Home = (props) => {
    return (
        <div className={props.classes.root}>
            <Navi classes={props.classes}/>
            <main className={props.classes.content}>

            </main>
        </div>
    )
}
export default Home