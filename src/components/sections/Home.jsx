import React from 'react'
import { Fragment } from 'react'
import carouselImageFirst from '../../assets/images/home/home_1.jpg'

const Home = () => {
    return (
        <Fragment>
            <div id="home" className="home" style={{ backgroundImage: `url("${carouselImageFirst}")` }}></div>
        </Fragment>
    )
}
export default Home