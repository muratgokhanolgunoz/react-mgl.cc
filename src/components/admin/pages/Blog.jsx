import React, { Component } from 'react'
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
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import languageTR from '../../../tools/languages/tr/common.json'
import languageEN from '../../../tools/languages/en/common.json'

import IconButton from '@material-ui/core/IconButton'
import { VscTrash, VscEdit } from "react-icons/vsc"

let blogItemList = []

class Blog extends Component {

    constructor(props) {
        super(props)

        this.state = {
            language: "tr"
        }
    }

    componentDidMount() {
        this.list()
        this.forceUpdate()
    }

    componentDidUpdate() {
        this.list()
    }

    list = () => {
        blogItemList = []

        if (this.state.language === "tr") {
            languageTR.blog.body.items.map((item) => blogItemList.push(item))
        }
        else {
            languageEN.blog.body.items.map((item) => blogItemList.push(item))
        }
    }

    editItem = () => {

    }

    deleteItem = (_id) => {

    }

    changeLanguageForFile = (_selection) => {
        this.setState({ language: _selection })
    }

    render() {
        return (
            <AdminContext.Consumer>
                {(context) => {
                    return (
                        <div className={this.props.classes.root}>
                            <Navi classes={this.props.classes} />
                            <main className={clsx(this.props.classes.content, { [this.props.classes.contentShift]: context.state.sidebarOpen, })}>
                                <div className={this.props.classes.drawerHeader} />
                                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                                    <Button onClick={() => this.changeLanguageForFile("tr")}>TR</Button>
                                    <Button onClick={() => this.changeLanguageForFile("en")}>EN</Button>
                                </ButtonGroup>
                                <br /><br />
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead style={{ backgroundColor: "#000" }}>
                                            <TableRow>
                                                <TableCell style={{ color: "#fff" }}>Author</TableCell>
                                                <TableCell style={{ color: "#fff" }}>Title</TableCell>
                                                <TableCell style={{ color: "#fff" }}>Date</TableCell>
                                                <TableCell style={{ color: "#fff" }}>Edit</TableCell>
                                                <TableCell style={{ color: "#fff" }}>Delete</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                blogItemList.map((blogItem) => (
                                                    <TableRow key={blogItem.BLOG_SECTION_ITEMS_ID}>
                                                        <TableCell>{blogItem.BLOG_SECTION_ITEMS_AUTHOR}</TableCell>
                                                        <TableCell>{blogItem.BLOG_SECTION_ITEMS_TITLE}</TableCell>
                                                        <TableCell>{blogItem.BLOG_SECTION_ITEMS_DATE}</TableCell>
                                                        <TableCell>
                                                            <IconButton aria-label="Edit" onClick={() => this.editItem()}>
                                                                <VscEdit />
                                                            </IconButton>
                                                        </TableCell>
                                                        <TableCell>
                                                            <IconButton aria-label="Delete" onClick={() => this.deleteItem(blogItem.BLOG_SECTION_ITEMS_ID)}>
                                                                <VscTrash />
                                                            </IconButton>
                                                        </TableCell>
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
}
export default Blog


