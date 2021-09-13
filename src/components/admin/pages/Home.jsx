import React from 'react'
import { Row } from 'react-bootstrap'
import Navi from '../constants/Navi'

const Home = () => {
    return (
        <div style={{ padding: "50px" }}>
            <Row>
                <Navi />
            </Row>
        </div>
    )
}
export default Home