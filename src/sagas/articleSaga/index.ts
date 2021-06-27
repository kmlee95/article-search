import { all, fork } from 'redux-saga/effects';

import watchGetAllArticles from './getAllArticles';

export default function* articleSaga() {
  yield all([fork(watchGetAllArticles)]);
}
