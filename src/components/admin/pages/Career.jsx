import React, { useState, useEffect } from 'react'
import AdminContext from '../../../context/AdminContext'
import Navi from '../constants/Navi'

import clsx from 'clsx'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import CareerService from '../../../services/CareerService'

let careerService = new CareerService()

const Career = (props) => {

    const [careerList, setCareerList] = useState([])

    useEffect(() => {
        careerService.getCareerList()
            .then((response) => setCareerList(response.data.result))
            .catch(() => console.warn("Has error occured when fetching list from api"))
    }, [])

    return (
        <AdminContext.Consumer>
            {(context) => {
                return (
                    <div className={props.classes.root}>
                        <Navi classes={props.classes} />
                        <main className={clsx(props.classes.content, { [props.classes.contentShift]: context.state.sidebarOpen, })}>
                            <div className={props.classes.drawerHeader} />
                            <TableContainer component={Paper}>
                                <Table className="admin-table">
                                    <TableHead style={{ backgroundColor: "#000" }}>
                                        <TableRow>
                                            <TableCell className="admin-table-cell">Name</TableCell>
                                            <TableCell className="admin-table-cell">Surname</TableCell>
                                            <TableCell className="admin-table-cell">Email</TableCell>
                                            <TableCell className="admin-table-cell">Phone</TableCell>
                                            <TableCell className="admin-table-cell">Message</TableCell>
                                            <TableCell className="admin-table-cell">File</TableCell>
                                            <TableCell className="admin-table-cell">Date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            careerList.map((careerItem, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{careerItem.name}</TableCell>                                         
                                                    <TableCell>{careerItem.surname}</TableCell>                                         
                                                    <TableCell>
                                                        <a className="admin-table-link" href={"mailto:" + careerItem.email}>{careerItem.email}</a>    
                                                    </TableCell>                                         
                                                    <TableCell>
                                                        <a className="admin-table-link" href={"tel:" + careerItem.phone}>{careerItem.phone}</a>    
                                                    </TableCell>                                         
                                                    <TableCell>{careerItem.message}</TableCell>                                         
                                                    <TableCell>
                                                        <a className="admin-table-link" href={careerItem.file} target="_blank" rel="noreferrer">CV File</a>    
                                                    </TableCell>                                         
                                                    <TableCell>{careerItem.date}</TableCell>                                         
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </main>
                    </div>
                )
            }}
        </AdminContext.Consumer>
    )
}
export default Career