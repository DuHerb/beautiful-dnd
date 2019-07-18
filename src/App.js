import React from 'react';
import './App.css';
import initData from './store'
import Column from './Column'

function App() {
  const [state, setState] = React.useState(initData)
  return (
    state.columnOrder.map(columnId=> {
      const column = state.columns[columnId];
      const tasks = column.taskIds.map(taskId => state.tasks[taskId])

      return <Column key={column.id} column={column} tasks={tasks} />
    })
  );
}

export default App;
