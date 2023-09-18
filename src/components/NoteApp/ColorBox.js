import React, { Component } from 'react'

export default class ColorBox extends Component {

    colorValue(cloorName){
        this.props.inputChangeColor(cloorName)
    }

    render() {
        let {color} = this.props;
        return (
            <div className='color-box' style={{backgroundColor: color}} onClick={this.colorValue.bind(this , color)}>
                
            </div>
        )
    }
}
