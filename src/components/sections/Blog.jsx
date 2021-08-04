import React, { Component, Fragment } from 'react'
import Titles from './titles/Titles'
import { Row, Col, Image } from 'react-bootstrap'

import blogImageFirst from '../../assets/images/blog/blog_1.png'
import blogImageSecond from '../../assets/images/blog/blog_2.png'

class Blog extends Component {
    render() {
        return (
            <Fragment>
                <div id="blog" className="blog section-padding">
                    <Row>
                        <Titles title="Bloğumuzdan Son Yazılar " subtitle="" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." textAlign="text-center" color="text-dark" fontSize="section-title-description-font-size" />
                    </Row>
                    <br /><br />
                    <Row>
                        <Col className="blog-box" lg={3} md={6}>
                            <div className="blog-box-item"> 
                                <Image className="blog-box-image" src={blogImageFirst} fluid />
                                <span>25 Ağu, 2021 | <small><b>Seyfi Arıcı</b> tarafından</small></span>
                                <h5>Addiction When Gambling Becomes A Problem</h5>
                                <p>Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their. </p>
                                <a className="template-button template-button-primary-2" href="#">DEVAMI . . .</a>
                            </div>
                        </Col>

                        <Col className="blog-box" lg={3} md={6}>
                            <div className="blog-box-item"> 
                                <Image className="blog-box-image" src={blogImageSecond} fluid />
                                <span>25 Ağu, 2021 | <small><b>Seyfi Arıcı</b> tarafından</small></span>
                                <h5>Addiction When Gambling Becomes A Problem</h5>
                                <p>Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their. </p>
                                <a className="template-button template-button-primary-2" href="#">DEVAMI . . .</a>
                            </div>
                        </Col>

                        <Col className="blog-box" lg={3} md={6}>
                            <div className="blog-box-item"> 
                                <Image className="blog-box-image" src={blogImageFirst} fluid />
                                <span>25 Ağu, 2021 | <small><b>Seyfi Arıcı</b> tarafından</small></span>
                                <h5>Addiction When Gambling Becomes A Problem</h5>
                                <p>Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their. </p>
                                <a className="template-button template-button-primary-2" href="#">DEVAMI . . .</a>
                            </div>
                        </Col>

                        <Col className="blog-box" lg={3} md={6}>
                            <div className="blog-box-item"> 
                                <Image className="blog-box-image" src={blogImageSecond} fluid />
                                <span>25 Ağu, 2021 | <small><b>Seyfi Arıcı</b> tarafından</small></span>
                                <h5>Addiction When Gambling Becomes A Problem</h5>
                                <p>Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their. </p>
                                <a className="template-button template-button-primary-2" href="#">DEVAMI . . .</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}
export default Blog