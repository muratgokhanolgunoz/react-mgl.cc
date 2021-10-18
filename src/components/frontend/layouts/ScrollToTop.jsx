/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import { Navbar } from 'react-bootstrap'
import { BsChevronDoubleUp } from "react-icons/bs"

class ScrollToTop extends Component {

    componentDidMount() {
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() <= 200) {
                    $("#button-scroll-to-top").css({ "marginLeft": "-60px" })
                } else {
                    $("#button-scroll-to-top").css({ "marginLeft": "60px" })
                }
            })
        })
    }

    render() {
        return (
            <div id="home-scroll-to-top">
                <Navbar id="home-scroll-to-top-lower" fixed="bottom" style={{ boxShadow: "none" }}>
                    <a id="button-scroll-to-top" onClick={(e => this.props.funcNavigate(e, 'home'))}>
                        <BsChevronDoubleUp />
                    </a>
                </Navbar>
            </div>
        )
    }
}

ScrollToTop.propTypes = {
    funcNavigate: PropTypes.func.isRequired,
}

export default ScrollToTop