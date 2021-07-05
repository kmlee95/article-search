import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import * as Effects from 'redux-saga/effects';

import { getAllArticles } from '@/api';
import {
  LOAD_SEARCH_REQUEST,
  loadSearchSuccess,
  loadSearchFailure,
  LoadSearchRequest,
} from '@/reducers/article/searchArticles';

const call: any = Effects.call;

function loadSearchAPI(searchData: string) {
  return axios.get(getAllArticles, { params: { fq: searchData } });
}

function* loadSearch(action: LoadSearchRequest) {
  try {
    const result = yield call(loadSearchAPI, action.searchData);
    yield put(loadSearchSuccess(result.data.response));
  } catch (err) {
    yield put(loadSearchFailure(err.response.data));
  }
}

function* watchLoadSearch() {
  yield takeLatest(LOAD_SEARCH_REQUEST, loadSearch);
}

export default watchLoadSearch;
