import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import CareerService from '../../../services/CareerService'
import Navi from '../layouts/Navi'
import CareerMessagePopup from './popups/CareerMessagePopup'

let careerService = new CareerService()

const Career = () => {

    const [popupStatus, setPopupStatus] = useState(false)
    const [careerList, setCareerList] = useState([])
    const [selectedCareerItem, setSelectedCareerItem] = useState(undefined)

    useEffect(() => {
        careerService.getCareerList()
            .then((response) => setCareerList(response.data.result.reverse()))
            .catch(() => console.warn("Has error occured when fetching list from api"))
    }, [])

    const handlePopupStatus = (_status) => setPopupStatus(_status)

    return (
        <div style={{ padding: "50px" }}>
            <Row>
                <Navi />
            </Row>
            <br />
            <Container fluid className="admin-container">
                <Row>
                    <Col>
                        <h2>Career | Midas Global Logistic</h2>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Table striped responsive>
                            <thead className="table-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Surname</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Message</th>
                                    <th>File</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    careerList.map((careerItem, index) => (
                                        <tr key={index}>
                                            <td>{careerItem.name}</td>
                                            <td>{careerItem.surname}</td>
                                            <td>
                                                <a href={"mailto:" + careerItem.email}>{careerItem.email}</a>
                                            </td>
                                            <td>
                                                <a href={"tel:" + careerItem.phone}>{careerItem.phone}</a>
                                            </td>
                                            <td>
                                                {careerItem.message !== null
                                                    ? <span className="text-primary" style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => { handlePopupStatus(true); setSelectedCareerItem(careerItem) }}>View</span>
                                                    : "null"
                                                }
                                            </td>
                                            <td>
                                                <a href={careerItem.file} target="_blank" rel="noreferrer">CV File</a>
                                            </td>
                                            <td>{careerItem.date}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

            <CareerMessagePopup selectedCareerItem={selectedCareerItem} careerPopupStatus={popupStatus} setCareerPopupStatus={handlePopupStatus} />
        </div>
    )
}
export default Career