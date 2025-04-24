import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import KanbanBoard from './KanbanBoard';

export default class App extends Component {
  render() {
    return (
      React.createElement(DndProvider, { backend: HTML5Backend },
        React.createElement(KanbanBoard)
      )
    );
  }
}
