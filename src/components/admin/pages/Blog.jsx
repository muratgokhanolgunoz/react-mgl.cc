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
import { Button } from 'react-bootstrap'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid'

import IconButton from '@material-ui/core/IconButton'
import { VscTrash } from "react-icons/vsc"

import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

let blogService = new BlogService()

class Blog extends Component {

    constructor(props) {
        super(props)

        this.state = {
            language: "tr",
            blogs: [],
            title: "",
            thumbnail: "",
            photo: "",
            summary: "",
            article: "",
            author: ""
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

    showToast = (_position, _text, _type) => {
        toast(_text, {
            position: _position,
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type: _type
        })
    }

    add = () => {
        const payload = new FormData()
        payload.append('title', this.state.title)
        payload.append('thumbnail', this.state.thumbnail)
        payload.append('photo', this.state.photo)
        payload.append('summary', this.state.summary)
        payload.append('article', this.state.article)
        payload.append('author', this.state.author)

        blogService.addBlog(this.state.language.toString().toLocaleLowerCase(), payload)
            .then((response) => {
                response.data.result === true
                    ?
                    this.showToast("bottom-right", "Success", "success")
                    :
                    this.showToast("bottom-right", "Failed", "error")

                this.setState({
                    title: "",
                    thumbnail: "",
                    photo: "",
                    summary: "",
                    article: "",
                    author: ""
                })
                this.forceUpdate()
            })
            .catch(() => (
                this.showToast("bottom-right", "Server error", "error")
            ))

        setTimeout(function () { window.location.reload() }, 2000);
    }

    delete = (_id) => {
        const array = {
            'id': _id
        }

        blogService.deleteBlog(array, this.state.language).then((response) => console.log(response))
        this.list()
    }

    changeLanguageForFile = (_selection) => {
        this.setState({ language: _selection })
        this.list()
    }

    thumbnailHandleChange = (e) => {
        this.setState({
            thumbnail: e.target.files[0]
        })
    }

    photoHandleChange = (e) => {
        this.setState({
            photo: e.target.files[0]
        })
    }

    summaryHandleChange = (e) => {
        this.setState({
            summary: e.target.files[0]
        })
    }

    articleHandleChange = (e) => {
        this.setState({
            article: e.target.files[0]
        })
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
                                    <Grid item xs={12}>
                                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                                            <Button onClick={() => this.changeLanguageForFile("tr")}>TR</Button>
                                            <Button onClick={() => this.changeLanguageForFile("us")}>EN</Button>
                                        </ButtonGroup>
                                    </Grid>
                                </Grid>

                                <br /><br />

                                <Grid container spacing={2}>
                                    <Grid item lg={4} sm={12} style={{ backgroundColor: "#f5f5f5", padding: "30px" }}>
                                        <Grid xs={12}>
                                            <label>Title : </label>
                                            <input
                                                id="input-title"
                                                type="text"
                                                name="title"
                                                value={this.state.title}
                                                className="form-control"
                                                onChange={(e) => this.setState({ title: e.target.value })}
                                            />
                                        </Grid>
                                        <br />
                                        <Grid xs={12}>
                                            <label>Thumbnail : </label>
                                            <input
                                                id="input-upload-thumbnail"
                                                type="file"
                                                name="thumbnail"
                                                accept=".jpg"
                                                onChange={this.thumbnailHandleChange}
                                                className="form-control"
                                            />
                                        </Grid>
                                        <br />
                                        <Grid xs={12}>
                                            <label>Photo : </label>
                                            <input
                                                id="input-upload-photo"
                                                type="file"
                                                name="photo"
                                                accept=".jpg"
                                                onChange={this.photoHandleChange}
                                                className="form-control"
                                            />
                                        </Grid>
                                        <br />
                                        <Grid xs={12}>
                                            <label>Summary : </label>
                                            <input
                                                id="input-upload-summary"
                                                type="file"
                                                name="summary"
                                                accept=".rtf"
                                                onChange={this.summaryHandleChange}
                                                className="form-control"
                                            />
                                        </Grid>
                                        <br />
                                        <Grid xs={12}>
                                            <label>Full Text : </label>
                                            <input
                                                id="input-upload-article"
                                                type="file"
                                                name="article"
                                                accept=".rtf"
                                                onChange={this.articleHandleChange}
                                                className="form-control"
                                            />
                                        </Grid>
                                        <br />
                                        <Grid xs={12}>
                                            <label>Author : </label>
                                            <input
                                                id="input-author"
                                                type="text"
                                                name="author"
                                                value={this.state.author}
                                                className="form-control"
                                                onChange={(e) => this.setState({ author: e.target.value })}
                                            />
                                        </Grid>
                                        <br />
                                        <Grid xs={12}>
                                            <Button onClick={() => this.add()}>S A V E</Button>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={8} sm={12}>
                                        <TableContainer component={Paper}>
                                            <Table aria-label="simple table">
                                                <TableHead style={{ backgroundColor: "#000" }}>
                                                    <TableRow>
                                                        <TableCell className="admin-table-cell">Author</TableCell>
                                                        <TableCell className="admin-table-cell">Title</TableCell>
                                                        <TableCell className="admin-table-cell">Date</TableCell>
                                                        <TableCell className="admin-table-cell">Delete</TableCell>
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
                                                                    <IconButton aria-label="Delete" onClick={() => this.delete(blogItem.BLOG_SECTION_ITEMS_ID)}>
                                                                        <VscTrash />
                                                                    </IconButton>
                                                                </TableCell>
                                                            </TableRow>
                                                        ))
                                                    }
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                </Grid>

                                <ToastContainer />
                            </main>
                        </div>
                    )
                }}
            </AdminContext.Consumer>
        )
    }
}
export default Blog


