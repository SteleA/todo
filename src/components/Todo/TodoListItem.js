import React from 'react';
import {
  Button,
  ListGroupItem,
  ButtonToolbar,
} from 'react-bootstrap';

export default props => (
    <ListGroupItem
      className={`status-${props.status.toLowerCase().split('_').join('-')} todo-list-item clearfix`}
      key={props.id}
    >
      <span className="todo-list-item-name">{props.item}</span>
      <ButtonToolbar className="pull-right">
        <Button
          bsSize="small"
          bsStyle="link"
          onClick={() => props.onItemClick(props.id)}
        >{props.status === 'COMPLETED' ? 'Undo' : 'Done'}</Button>
        {props.status === 'COMPLETED' &&
          <Button
            bsSize="small"
            bsStyle="link"
            onClick={() => props.onRemoveItem(props.id)}
          >Delete item</Button>
        }
      </ButtonToolbar>
    </ListGroupItem>
);
