import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const taskSource = {
  beginDrag(props) {
    return { id: props.id };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Task extends Component {
  render() {
    const { title, connectDragSource, isDragging } = this.props;

    return connectDragSource(
      React.createElement('div', {
        style: {
          padding: '10px',
          marginBottom: '8px',
          backgroundColor: isDragging ? '#aaa' : '#fff',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'move'
        }
      }, title)
    );
  }
}

export default DragSource('TASK', taskSource, collect)(Task);
