import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import * as Effects from 'redux-saga/effects';

import { getAllArticles } from '@/api';
import {
  LOAD_ARTICLES_REQUEST,
  loadArticlesSuccess,
  loadArticlesFailure,
  LoadArticlesRequest,
} from '@/reducers/article/getAllArticles';

const call: any = Effects.call;

function loadArticlesAPI(pages: number) {
  return axios.get(getAllArticles, { params: { page: pages } });
}

function* loadArticles(action: LoadArticlesRequest) {
  try {
    const result = yield call(loadArticlesAPI, action.page);
    yield put(loadArticlesSuccess(result.data.response));
  } catch (err) {
    yield put(loadArticlesFailure(err.response.data));
  }
}

function* watchLoadArticles() {
  yield takeLatest(LOAD_ARTICLES_REQUEST, loadArticles);
}

export default watchLoadArticles;
