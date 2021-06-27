import { all, fork } from 'redux-saga/effects';
import watchGetAllArticles from './getAllArticles';

export default function* postSaga() {
  yield all([fork(watchGetAllArticles)]);
}
