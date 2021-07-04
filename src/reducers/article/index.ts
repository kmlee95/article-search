import produce from 'immer';

import {
  LOAD_ARTICLES_REQUEST,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_FAILURE,
  GetAllArticles,
} from '@/reducers/article/getAllArticles';

import {
  LOAD_SEARCH_REQUEST,
  LOAD_SEARCH_SUCCESS,
  LOAD_SEARCH_FAILURE,
  SearchArticles,
} from '@/reducers/article/searchArticles';

import { ArticleDetail } from '@/types/article';

interface IArticleState {
  allArticles: ArticleDetail[] | undefined;
  loadArticlesLoading: boolean;
  loadArticlesDone: boolean;
  loadArticlesError: null | string;
  loadSearchLoading: boolean;
  loadSearchDone: boolean;
  loadSearchError: null | string;
}

const articleState: IArticleState = {
  allArticles: [],
  loadArticlesLoading: false,
  loadArticlesDone: false,
  loadArticlesError: null,
  loadSearchLoading: false,
  loadSearchDone: false,
  loadSearchError: null,
};

type ReducerAction = GetAllArticles | SearchArticles;

const articles = (state: IArticleState = articleState, action: ReducerAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_ARTICLES_REQUEST:
        draft.loadArticlesLoading = true;
        draft.loadArticlesDone = false;
        draft.loadArticlesError = null;
        break;
      case LOAD_ARTICLES_SUCCESS:
        draft.loadArticlesLoading = false;
        draft.loadArticlesDone = true;
        draft.allArticles = draft.allArticles?.concat(action.data.docs);
        break;
      case LOAD_ARTICLES_FAILURE:
        draft.loadArticlesLoading = false;
        draft.loadArticlesError = action.error;
        break;

      case LOAD_SEARCH_REQUEST:
        draft.loadArticlesLoading = true;
        draft.loadArticlesDone = false;
        draft.loadArticlesError = null;
        break;
      case LOAD_SEARCH_SUCCESS:
        draft.loadArticlesLoading = false;
        draft.loadArticlesDone = true;
        draft.allArticles = action.data.docs;
        break;
      case LOAD_SEARCH_FAILURE:
        draft.loadArticlesLoading = false;
        draft.loadArticlesError = action.error;
        break;
    }
  });
};

export default articles;
