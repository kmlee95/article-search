import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

import { getAllArticles } from '@/api';
import { LOAD_ARTICLES_REQUEST, loadArticlesSuccess, loadArticlesFailure } from '@/reducers/article/getAllArticles';

interface IResponse {
  data?: any;
}

function loadArticlesAPI() {
  return axios.get(getAllArticles);
}

function* loadArticles() {
  try {
    const result: IResponse = yield call(loadArticlesAPI);
    yield put(loadArticlesSuccess(result.data));
  } catch (err) {
    yield put(loadArticlesFailure(err.response.data));
  }
}

function* watchLoadArticles() {
  yield takeLatest(LOAD_ARTICLES_REQUEST, loadArticles);
}

export default watchLoadArticles;
