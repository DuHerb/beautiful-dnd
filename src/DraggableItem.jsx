import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: '8px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const DraggableItem = ({task}) => {
  const classes = useStyles();
  return (
    <div>
          <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {task.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default DraggableItem
