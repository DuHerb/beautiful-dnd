import React from 'react'
import Task from './Task'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`margin: 8px; border: 1px solid gray; border-radius: 2px;`;
const Title = styled.div`padding: 8px;`;
const TaskList = styled.div`padding: 8px; transition: background-color 0.2s ease; background-color: ${props => props.isDraggingOver ? 'skyblue' : 'white'}`



export default class Column extends React.Component{
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    console.log("droppableId: ", this.props.column.id);

    return (
      // <div>testing container id</div>
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) =>
                <Task
                  key={task.id}
                  task={task}
                  index={index}
                />
                )}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    )
  }
}

