import React from 'react'
import Task from './Task'

const styles = {
  container: {
    margin: 8,
    border: '1px solid gray',
    borderRadius: 4
  },
  title: {
    padding: 8
  },
  taskList: {
    padding: 8
  }
}

const Column = ({column, tasks, key}) => {
  return (
    <div style={styles.container}>
      <p style={styles.title}>{column.title}</p>
      <div style={styles.taskList}>
        {tasks.map((task) =>
          <Task
            key={task.id}
            task={task}
          />
        )}
      </div>
    </div>
  )
}

export default Column
