import produce from 'immer';

import {
  LOAD_ARTICLES_REQUEST,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_FAILURE,
  GetAllArticles,
} from '@/reducers/article/getAllArticles';
import { IAllArticlesData } from '@/types/article';

interface IArticleState {
  allArticles: IAllArticlesData | null;
  loadArticlesLoading: boolean;
  loadArticlesDone: boolean;
  loadArticlesError: null | string;
}

const articleState: IArticleState = {
  allArticles: null,
  loadArticlesLoading: false,
  loadArticlesDone: false,
  loadArticlesError: null,
};

type ReducerAction = GetAllArticles;

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
        draft.allArticles = action.data;
        break;
      case LOAD_ARTICLES_FAILURE:
        draft.loadArticlesLoading = false;
        draft.loadArticlesError = action.error;
        break;
    }
  });
};

export default articles;
