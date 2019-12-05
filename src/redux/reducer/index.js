import { combineReducers } from 'redux';
import auth from './AuthReducer';
import user from './UserReducer';
import addTodo from './TodoReducer';

const IndexReducer = combineReducers({
  auth: auth,
  user:user,
  addTodo: addTodo
});

export default IndexReducer;
