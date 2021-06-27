import axios from 'axios';
import { put, call, throttle } from 'redux-saga/effects';
import { getAllArticles } from '@/api';
import {
  LOAD_ARTICLES_REQUEST,
  LoadArticlesRequest,
  loadArticlesSuccess,
  loadArticlesFailure,
} from '@/reducers/article/getAllArticles';

function loadArticlesAPI() {
  return axios.get(getAllArticles);
}

function* loadArticles(action: LoadArticlesRequest) {
  try {
    const result = yield call(loadArticlesAPI);
    yield put(loadArticlesSuccess(result.data));
  } catch (err) {
    yield put(loadArticlesFailure(err.response.data));
  }
}

function* watchLoadPosts() {
  yield throttle(5000, LOAD_ARTICLES_REQUEST, loadArticles);
}

export default watchLoadPosts;
