import { all, fork } from 'redux-saga/effects';

import watchGetAllArticles from './getAllArticles';
import watchLoadSearch from './searchArticles';

export default function* articleSaga() {
  yield all([fork(watchGetAllArticles), fork(watchLoadSearch)]);
}
