import React, { Component } from 'react';
import {
  Button,
  ListGroupItem,
  ButtonToolbar,
  FormControl,
  FormGroup,
  InputGroup,
} from 'react-bootstrap';

export default class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editItem: false,
      item: this.props.item,
    };
  }

  onEditChange(e) {
    e.preventDefault();
    this.props.onChange(this.state.item);
    this.setState({ editItem: false });
  }

  renderItemName() {
    if (this.state.editItem) {
      return (
      <form onSubmit={e => this.onEditChange(e)}>
        <FormGroup>
           <InputGroup>
             <FormControl
                type="text"
                value={this.state.item}
                onChange={({ target: { value } }) => this.setState({ item: value }) }
            />
             <InputGroup.Button>
               <Button type="submit" disabled={!this.state.item} >Save Changes</Button>
             </InputGroup.Button>
           </InputGroup>
         </FormGroup>
       </form>
      );
    }
    return (
      <span
        className="todo-list-item-name"
        onClick={() => this.setState({ editItem: true })}
      >{this.props.item}</span>
    );
  }

  renderActions() {
    if (!this.state.editItem) {
      return (
        <ButtonToolbar className="pull-right">
          <Button
            bsSize="small"
            bsStyle="link"
            onClick={() => this.props.onItemClick(this.props.id)}
          >{this.props.status === 'COMPLETED' ? 'Undo' : 'Done'}</Button>
          {this.props.status === 'COMPLETED' &&
            <Button
              bsSize="small"
              bsStyle="link"
              onClick={() => this.props.onRemoveItem(this.props.id)}
            >Delete item</Button>
          }
        </ButtonToolbar>
      );
    }
    return false;
  }

  render() {
    return (
      <ListGroupItem
        className={`status-${this.props.status.toLowerCase().split('_').join('-')} todo-list-item clearfix`}
        key={this.props.id}
      >
        {this.renderItemName()}
        {this.renderActions()}
      </ListGroupItem>
    );
  }
}
