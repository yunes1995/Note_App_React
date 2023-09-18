import React, { Component } from 'react'

export default class Note extends Component {

    noteDeleter(id){
        this.props.deleteNote(id)
    }

    render() {
        return (
            <div className="card shadow-sm rounded" style={{ backgroundColor: this.props.color }} onClick={this.noteDeleter.bind(this , this.props.id)}><p className="card-text p-3">{this.props.content}</p></div>
        )
    }
}
