import { all, fork } from 'redux-saga/effects';

import articleSaga from './articleSaga';

export default function* rootSaga() {
  yield all([fork(articleSaga)]);
}
