import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid grey;
    padding: 8px;
    margin-bottom: 8px;
    borderRadius: 4px;`;

    const box = {
      border: '1px solid grey',
      padding: 8,
      marginBottom: 8,
      borderRadius: 4
    }


export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

 
  render(){
    console.log("draggableId: ", this.props.task.id);
    return (
      // <div>testing</div>
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
      >
        {(provided)=>(
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <p>{this.props.task.content}</p>
          </Container>
        )}
      </Draggable>
    )
  }
}

