import React, { Component } from 'react'
import AdminContext from '../../../context/AdminContext'
import BlogService from '../../../services/BlogService'

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
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton'
import { VscTrash, VscEdit } from "react-icons/vsc"


let blogService = new BlogService()

class Blog extends Component {

    constructor(props) {
        super(props)

        this.state = {
            language: "tr",
            blogs: []
        }
    }

    componentDidMount() {
        this.list()
        this.forceUpdate()
    }

    list = () => {
        this.setState({ blogs: [] })
        console.log(this.state.language)
        blogService.getBlogs(this.state.language).then((response) => this.setState({ blogs: response.data.result }))
    }

    editItem = () => {

    }

    deleteItem = (_id) => {
        const array = {
            'language' : this.state.language,
            'id': _id
        }
        blogService.deleteBlog(array).then((response) => console.log(response))
    }

    changeLanguageForFile = (_selection) => {
        this.setState({ language: _selection })
        this.list()
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
                                <Grid container spacing={2}>
                                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                                        <Button onClick={() => this.changeLanguageForFile("tr")}>TR</Button>
                                        <Button onClick={() => this.changeLanguageForFile("us")}>EN</Button>
                                    </ButtonGroup>
                                </Grid>
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
                                                this.state.blogs.map((blogItem, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell>{blogItem.BLOG_SECTION_ITEMS_AUTHOR}</TableCell>
                                                        <TableCell>{blogItem.BLOG_SECTION_ITEMS_TITLE}</TableCell>
                                                        <TableCell>{blogItem.BLOG_SECTION_ITEMS_DATE}</TableCell>
                                                        <TableCell>
                                                            <IconButton aria-label="Edit" onClick={() => this.editItem()}>
                                                                <VscEdit />
                                                            </IconButton>
                                                        </TableCell>
                                                        <TableCell>
                                                            <IconButton aria-label="Delete" onClick={() => this.deleteItem(index)}>
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


