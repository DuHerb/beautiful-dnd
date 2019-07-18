import React from 'react';
import './App.css';
import initData from './store'
import Column from './Column'
import { DragDropContext } from 'react-beautiful-dnd'

export default class App extends React.Component {
  state = initData;

  onDragEnd = result => {
    //TODO
  }

  render() {
    return(
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </DragDropContext>
    )
  }
}
