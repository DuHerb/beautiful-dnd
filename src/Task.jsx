import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid grey;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')}
    borderRadius: 4px;
    display: flex;`;

    const box = {
      border: '1px solid grey',
      padding: 8,
      marginBottom: 8,
      borderRadius: 4
    }

    const styles = {
      handle: {
        width: 20,
        height: 20,
        backgroundColor: 'orange',
        borderRadius: 4,
        marginRight: 8
      }
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
        {(provided, snapshot)=>(
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <div style={styles.handle}
              {...provided.dragHandleProps}
            />
            <p>{this.props.task.content}</p>
          </Container>
        )}
      </Draggable>
    )
  }
}

