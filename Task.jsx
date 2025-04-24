// Task.jsx
import React from 'react';
import { DragSource } from 'react-dnd';

const taskSource = {
  beginDrag(props) {
    return { id: props.id };
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

class Task extends React.Component {
  render() {
    const { title, connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <div
        style={{
          padding: '10px',
          marginBottom: '8px',
          backgroundColor: isDragging ? '#aaa' : '#fff',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'move',
        }}
      >
        {title}
      </div>
    );
  }
}

export default DragSource('TASK', taskSource, collect)(Task);
