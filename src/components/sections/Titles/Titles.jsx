import React from 'react'
import { Fragment } from 'react'

const Titles = (props) => {
    return (
        <Fragment>
            <h2 className={props.textAlign}>{props.title}</h2>
            <p className={props.textAlign}>{props.description}</p>
        </Fragment>
    )
}
export default Titles