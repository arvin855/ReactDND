// App.jsx
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import KanbanBoard from './KanbanBoard';

export default class App extends React.Component {
  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <KanbanBoard />
      </DndProvider>
    );
  }
}
