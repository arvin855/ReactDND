import React, { Component } from 'react';
import Column from './Column';

export default class KanbanBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, title: 'Task 1', status: 'todo' },
        { id: 2, title: 'Task 2', status: 'in-progress' },
        { id: 3, title: 'Task 3', status: 'done' },
      ]
    };
    this.moveTask = this.moveTask.bind(this);
  }

  moveTask(id, newStatus) {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    }));
  }

  render() {
    const statuses = ['todo', 'in-progress', 'done'];
    const columns = statuses.map(status =>
      React.createElement(Column, {
        key: status,
        status,
        tasks: this.state.tasks.filter(t => t.status === status),
        moveTask: this.moveTask
      })
    );

    return React.createElement('div', {
      style: { display: 'flex', gap: '20px', padding: '20px' }
    }, ...columns);
  }
}
