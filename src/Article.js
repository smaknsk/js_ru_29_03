import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class Article extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { title, text, comments} = this.props.article
        const body = this.state.isOpen ? <section>{text}<CommentList comments = {comments} /></section> : null
        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                {body}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article