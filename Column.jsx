// Column.jsx
import React from 'react';
import { DropTarget } from 'react-dnd';
import Task from './Task';

const columnTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    props.moveTask(item.id, props.status);
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

class Column extends React.Component {
  render() {
    const { connectDropTarget, isOver, status, tasks } = this.props;

    return connectDropTarget(
      <div
        style={{
          width: '250px',
          minHeight: '300px',
          padding: '10px',
          backgroundColor: isOver ? '#ddd' : '#eee',
          borderRadius: '8px',
        }}
      >
        <h3 style={{ textTransform: 'capitalize' }}>{status}</h3>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} title={task.title} />
        ))}
      </div>
    );
  }
}

export default DropTarget('TASK', columnTarget, collect)(Column);
