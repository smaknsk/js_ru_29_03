import React, { Component, PropTypes } from 'react'
import Comment from './Comment'

class CommentList extends Component {

    state = {
        isOpen: false
    }

    render() {
        const body = this.state.isOpen ? <ul>{this.getList()}</ul> : null
        return (
            <div>
                <a onClick = {this.handleClick}>{this.state.isOpen ? 'Скрыть комментарии' : 'Показать комментарии'}</a>
                {body}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getList() {
        if (!this.props.comments) {
            return <li><Comment /></li>;
        }
        return this.props.comments.map((comment, index) =>
            <li key={comment.id}><Comment comment = {comment} /></li>
        )
    }
}

export default CommentList