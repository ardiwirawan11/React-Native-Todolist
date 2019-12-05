import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import IndexSaga from './src/saga/index'
import rootReducer from './src/redux/reducer/index';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(rootReducer,
    applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(IndexSaga)
  };
};

export default configureStore;
