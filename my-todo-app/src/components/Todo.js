import React, { Component } from 'react';

export default class Todo extends Component{
    
    render(){        
        return (
        <div>
            <span >{this.props.task}</span>
        </div>);
    }
}
