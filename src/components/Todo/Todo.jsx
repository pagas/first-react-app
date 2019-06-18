import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import List from './List';
import './Todo.css';

class Todo extends Component {
  constructor() {
    super();

    // Initial state...
    this.state = {
      task: '',
      items: []
    };
  }

  componentWillMount() {
    // Setting default tasks...
    this.setState({
      items: [
        {
          id: uuidv4(),
          task: 'Pay the rent',
          completed: false
        },
        {
          id: uuidv4(),
          task: 'Go to the gym',
          completed: false
        },
        {
          id: uuidv4(),
          task: 'Do my homework',
          completed: false
        }
      ]
    });
  }

    handleOnChange = e => {
      const { target: { value } } = e;

      // Updating our task state with the input value...
      this.setState({
        task: value
      });
    };

    handleOnSubmit = e => {
      const { task, items } = this.state;
      // Prevent default to avoid the actual form submit...
      e.preventDefault();

      // Once is submitted we reset the task value and
      // we push the new task to the items array.
      if (task.trim() !== '') {
        this.setState({
          task: '',
          items: [
            ...items,
            {
              id: uuidv4(),
              task,
              complete: false
            }
          ]
        });
      }
    };

    markAsCompleted = id => {
      const { items } = this.state;
      // Finding the task by id...
      const foundTask = items.find(
        task => task.id === id
      );

      // Updating the completed status...
      foundTask.completed = true;

      // Updating the state with the new updated task...
      this.setState({
        items: [
          ...items
        ]
      });
    };

    removeTask = id => {
      const { items } = this.state;
      // Filtering the tasks by removing the specific task id...
      const filteredTasks = items.filter(
        task => task.id !== id
      );

      // Updating items state...
      this.setState({
        items: filteredTasks
      });
    };

    render() {
      const { task, items } = this.state;
      return (
        <div className="Todo">
          <h1>New Task:</h1>

          <form onSubmit={this.handleOnSubmit}>
            <input
              value={task}
              onChange={this.handleOnChange}
            />
          </form>

          <List
            items={items}
            markAsCompleted={this.markAsCompleted}
            removeTask={this.removeTask}
          />
        </div>
      );
    }
}

export default Todo;
