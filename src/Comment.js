import React, { Component, PropTypes } from 'react'

class Comment extends Component {
    
    render() {
        if (typeof this.props.comment == 'undefined') {
            return <div><i>Комментариев пока нет</i></div>
        }

        const text = this.props.comment.text

        return (
            <div>
                {text}
            </div>
        );
    }
}

export default Comment