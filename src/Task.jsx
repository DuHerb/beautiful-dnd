import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import {makeStyles} from '@material-ui/styles'
import DraggableItem from'./DraggableItem';

const useStyles = makeStyles({
  dropBox: {
    border: '1px solid grey',
    padding: 8,
    marginBottom: 8,
    borderRadius: 4 
  }
})

const Container = styled.div`
  `;

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
      },
      box: {
        border: '1px solid grey',
        padding: 8,
        marginBottom: 8,
        borderRadius: 4
      }
    }

export default class Task extends React.Component {


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
            {...provided.dragHandleProps}
          >
            <DraggableItem task={this.props.task}/>
          </Container>
        )}
      </Draggable>
    )
  }
}

