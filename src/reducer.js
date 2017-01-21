import { combineReducers } from 'redux';
import todoReducer from './modules/todo-module';

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
