import React from 'react'
import { Fragment } from 'react'
import { Carousel } from 'react-bootstrap'
import carouselImageFirst from '../../assets/images/home/home_4.jpg'

const Home = () => {
    return (
        <Fragment>
            <div id="home">
                <Carousel className="carousel" fade>
                    <Carousel.Item>
                        <img className="d-block w-100" src={carouselImageFirst} alt="" />
                        <Carousel.Caption>
                            <h3>Midas Global Lojistik</h3>
                            <p className="slider-caption">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={carouselImageFirst} alt="" />
                        <Carousel.Caption>
                            <h3>e-İşlemler</h3>
                            <p className="slider-caption">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={carouselImageFirst} alt="" />
                        <Carousel.Caption>
                            <h3>Parsiyel Taşımacılık</h3>
                            <p className="slider-caption">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Fragment>
    )
}
export default Home