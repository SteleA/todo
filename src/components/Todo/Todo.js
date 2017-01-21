import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './TodoStyles.scss';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  componentDidMount() {
    this.props.actions.getItems();
  }

  onAddItem(e) {
    if (e) e.preventDefault();
    if (this.state.input && this.state.input !== '') {
      this.props.actions.addItem(this.state.input, this.props.todo.items);
      this.setState({ input: '' });
    }
    return false;
  }

  onRemoveItem(id) {
    this.props.actions.removeItem(id, this.props.todo.items);
  }

  onChangeStatus(id) {
    this.props.actions.changeStatus(id, this.props.todo.items);
  }

  render() {
    if (this.props.todo.loading) {
      return <h5 className="text-center">Loading Todo Lists...</h5>;
    }
    return (
      <Col sm={6} smOffset={3} className="todo">
        <TodoHeader items={this.props.todo.items} />
        <TodoForm
          onChange={input => this.setState({ input })}
          onAddItem={e => this.onAddItem(e)}
          input={this.state.input}
        />
        <TodoList
          items={this.props.todo.items}
          onItemClick={id => this.onChangeStatus(id)}
          onRemoveItem={id => this.onRemoveItem(id)}
        />
      </Col>
    );
  }
}

export default Todo;
