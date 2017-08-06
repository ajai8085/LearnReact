import React, { Component } from 'react';
//import './App.css';
import TodoList from './components/TodoList';


  const todos=[
            {task:"Buy medicines", isCompleted:"false"},
            {task:"Buy meat", isCompleted:"false"},
            {task:"Buy groceries", isCompleted:"false"},
            {task:"Learn React", isCompleted:"false"},
            {task:"Find a girlfriend", isCompleted:"false"}
        ];

class App extends Component {
  
  constructor(props){
    super(props);

     this.state={todos};

  }
  
  render() {
    return (
      <div>
          <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
