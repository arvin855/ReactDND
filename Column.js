import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Task from './Task';

const columnTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    props.moveTask(item.id, props.status);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class Column extends Component {
  render() {
    const { connectDropTarget, isOver, status, tasks } = this.props;

    return connectDropTarget(
      React.createElement('div', {
        style: {
          width: '250px',
          minHeight: '300px',
          padding: '10px',
          backgroundColor: isOver ? '#ccc' : '#eee',
          borderRadius: '8px'
        }
      },
        React.createElement('h3', null, status.charAt(0).toUpperCase() + status.slice(1)),
        ...tasks.map(task =>
          React.createElement(Task, {
            key: task.id,
            id: task.id,
            title: task.title
          })
        )
      )
    );
  }
}

export default DropTarget('TASK', columnTarget, collect)(Column);
