import React, { Component } from 'react'
import Note from './Note'
import ColorBox from './ColorBox'

export default class NoteApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [
                "#fff",
                "#FFD37F",
                "#FFFA81",
                "#D5FA80",
                "#78F87F",
                "#79FBD6",
                "#79FDFE",
                "#7AD6FD",
                "#7B84FC",
                "#D687FC",
                "#FF89FD",
            ],
            notes: [],
            noteTitle: '',
            inputColor: '#fff'
        }
    }

    colorHandler(colorId){
        this.setState({
            inputColor : colorId
        })
        console.log(colorId);
    }

    inputHandler(event){
        let textValue = event.target.value
        this.setState({
            noteTitle : textValue
        })
        
    }

    addNote() {
        let newNote = {
            id : this.state.notes.length + 1, 
            content : this.state.noteTitle,
            color : this.state.inputColor
        }
       
        this.setState({
            notes : [...this.state.notes ,  newNote]
        })
        console.log(newNote);
    }

    deleteHandler(id){
       let newNote  = this.state.notes.filter(item => item.id !== id)
        this.setState({
            notes : newNote
        })
    }

    clearHandler(){
        this.setState({
            noteTitle: '',
            inputColor: '#fff'
        });
    }

    render() {
        return (
            <>
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="header upper">Note App</div>

                            <br /><br />
                            <div className="flex row-gt-sm">
                                <div className="flex flex-50-gt-sm">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <input id="input-field" className="form-control" type="text" style={{ backgroundColor: this.state.inputColor }} placeholder="Something here..." onChange={this.inputHandler.bind(this)} value={this.state.noteTitle}/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <div id='color-select'>
                                            {this.state.colors.map(item => {
                                                return <ColorBox color={item} inputChangeColor={this.colorHandler.bind(this)}/>
                                            })}
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                        <button id="btn-save" type="button" className="btn btn-outline-info" onClick={this.addNote.bind(this)}><span className="fa fa-plus"></span></button>
                                        <button id="btn-delete" type="button" className="btn btn-outline-danger" onClick={this.clearHandler.bind(this)}><span id="btn-icon"
                                            className="fa fa-eraser"></span></button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex row-gt-sm">

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="container">
                                        <div className="row">
                                            <div id='listed' className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns">

                                            {this.state.notes.map(item => {
                                                return  <Note {...item} deleteNote={this.deleteHandler.bind(this)}/>
                                            })}
                                                

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </section>
                </div>
            </>
        )
    }
}
