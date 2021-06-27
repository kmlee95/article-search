import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from '@/reducers';
import rootSaga from '@/sagas';

const isProd = process.env.NODE_ENV === 'production';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = isProd
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));
  const store: any = createStore(reducer, enhancer);

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
