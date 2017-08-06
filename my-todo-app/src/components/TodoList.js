import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component{

    renderItems(){
       return this.props.todos.map((i)=>{
        return <Todo {...i}/>
    });}

    render(){
       
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

