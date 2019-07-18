import React from 'react'

const styles = {
  container: {
    border: '1px solid grey',
    padding: 8,
    marginBottom: 8,
    borderRadius: 4
  }
}
const task = ({task, key}) => {
  return (
    <div style={styles.container}>
      {task.content}
    </div>
  )
}

export default task
