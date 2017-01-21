import React from 'react';
import { ListGroup } from 'react-bootstrap';
import _ from 'lodash';
import TodoListItem from './TodoListItem';

export default props => (
    <ListGroup className="todo-list">
      {_.map(props.items, item =>
        <TodoListItem
          key={item.id}
          { ...item }
          onItemClick={props.onItemClick}
          onRemoveItem={props.onRemoveItem}
          onChange={(i) => {
            const newItem = Object.assign({}, item, { item: i });
            props.onEditItem(newItem);
          }}
        />)}
   </ListGroup>
);
