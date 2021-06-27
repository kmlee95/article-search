import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import articleSaga from './articleSaga';

export default function* rootSaga() {
  yield all([fork(articleSaga)]);
}
