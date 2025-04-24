// KanbanBoard.jsx
import React from 'react';
import Column from './Column';

export default class KanbanBoard extends React.Component {
  state = {
    tasks: [
      { id: 1, title: 'Task 1', status: 'todo' },
      { id: 2, title: 'Task 2', status: 'in-progress' },
      { id: 3, title: 'Task 3', status: 'done' },
    ],
  };

  moveTask = (id, newStatus) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      ),
    }));
  };

  render() {
    const { tasks } = this.state;
    const statuses = ['todo', 'in-progress', 'done'];

    return (
      <div style={{ display: 'flex', gap: '16px', padding: '20px' }}>
        {statuses.map((status) => (
          <Column
            key={status}
            status={status}
            tasks={tasks.filter((t) => t.status === status)}
            moveTask={this.moveTask}
          />
        ))}
      </div>
    );
  }
}
