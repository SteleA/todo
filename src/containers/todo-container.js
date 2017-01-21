import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../modules/todo-module';
import { Todo } from '../components';

const mapStateToProps = state => ({
  todo: state.todo,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators(
        actions,
        dispatch
    ),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
