import { IResponseArticle } from '@/types/article';

export const LOAD_ARTICLES_REQUEST = 'LOAD_ARTICLES_REQUEST' as const;
export const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS' as const;
export const LOAD_ARTICLES_FAILURE = 'LOAD_ARTICLES_FAILURE' as const;

export interface LoadArticlesRequest {
  type: typeof LOAD_ARTICLES_REQUEST;
}

export interface LoadArticlesSuccess {
  type: typeof LOAD_ARTICLES_SUCCESS;
  data: IResponseArticle;
}

export interface LoadArticlesFailure {
  type: typeof LOAD_ARTICLES_FAILURE;
  error: string;
}

export const loadArticlesRequest = (): LoadArticlesRequest => ({
  type: LOAD_ARTICLES_REQUEST,
});

export const loadArticlesSuccess = (data: IResponseArticle): LoadArticlesSuccess => ({
  type: LOAD_ARTICLES_SUCCESS,
  data,
});

export const loadArticlesFailure = (error: string): LoadArticlesFailure => ({
  type: LOAD_ARTICLES_FAILURE,
  error,
});

export type GetAllArticles =
  | ReturnType<typeof loadArticlesRequest>
  | ReturnType<typeof loadArticlesSuccess>
  | ReturnType<typeof loadArticlesFailure>;
