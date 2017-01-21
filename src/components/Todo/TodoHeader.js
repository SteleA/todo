import React from 'react';

export default props => (
  <h4 className="text-center">
    {props.items.length > 0 &&
      <span>{props.items.length} item(s) in your Todo List!</span>}
    {props.items.length === 0 &&
      <span>Add your first Todo item!</span>}
  </h4>
);
