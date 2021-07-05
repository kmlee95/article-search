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

import {
  LIKE_ARTICLES_REQUEST,
  LIKE_ARTICLES_SUCCESS,
  LIKE_ARTICLES_FAILURE,
  LikeArticles,
} from '@/reducers/article/likeArticles';

import {
  UNLIKE_ARTICLES_REQUEST,
  UNLIKE_ARTICLES_SUCCESS,
  UNLIKE_ARTICLES_FAILURE,
  UnLikeArticles,
} from '@/reducers/article/unlikeArticles';

import { ArticleDetail } from '@/types/article';

interface IArticleState {
  allArticles: ArticleDetail[] | undefined;
  likeArticles: string[] | undefined;

  loadArticlesLoading: boolean;
  loadArticlesDone: boolean;
  loadArticlesError: null | string;

  loadSearchLoading: boolean;
  loadSearchDone: boolean;
  loadSearchError: null | string;

  likeArticlesLoading: boolean;
  likeArticlesDone: boolean;
  likeArticlesError: null | string;

  unlikeArticlesloading: boolean;
  unlikeArticlesDone: boolean;
  unlikeArticlesError: null | string;
}

const articleState: IArticleState = {
  allArticles: [],
  likeArticles: [],
  loadArticlesLoading: false,
  loadArticlesDone: false,
  loadArticlesError: null,

  loadSearchLoading: false,
  loadSearchDone: false,
  loadSearchError: null,

  likeArticlesLoading: false,
  likeArticlesDone: false,
  likeArticlesError: null,

  unlikeArticlesloading: false,
  unlikeArticlesDone: false,
  unlikeArticlesError: null,
};

type ReducerAction = GetAllArticles | SearchArticles | LikeArticles | UnLikeArticles;

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

      case LIKE_ARTICLES_REQUEST:
        draft.likeArticlesLoading = true;
        draft.likeArticlesDone = false;
        draft.likeArticles = draft.likeArticles.concat(action.articleId);
        break;
      case LIKE_ARTICLES_SUCCESS:
        draft.likeArticlesLoading = false;
        draft.likeArticlesDone = true;
        draft.likeArticlesError = null;
        break;
      case LIKE_ARTICLES_FAILURE:
        draft.likeArticlesLoading = false;
        draft.likeArticlesError = action.error;
        break;

      case UNLIKE_ARTICLES_REQUEST:
        draft.likeArticlesLoading = true;
        draft.likeArticlesDone = false;
        draft.likeArticles = draft.likeArticles.filter((likeArticle) => likeArticle !== action.articleId);
        break;
      case UNLIKE_ARTICLES_SUCCESS:
        draft.likeArticlesLoading = false;
        draft.likeArticlesDone = true;
        draft.likeArticlesError = null;
        break;
      case UNLIKE_ARTICLES_FAILURE:
        draft.likeArticlesLoading = false;
        draft.likeArticlesError = action.error;
        break;
    }
  });
};

export default articles;
