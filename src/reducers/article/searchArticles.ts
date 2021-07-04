import { IInputData, IResponseArticle } from '@/types/article';

export const LOAD_SEARCH_REQUEST = 'LOAD_SEARCH_REQUEST' as const;
export const LOAD_SEARCH_SUCCESS = 'LOAD_SEARCH_SUCCESS' as const;
export const LOAD_SEARCH_FAILURE = 'LOAD_SEARCH_FAILURE' as const;

export interface LoadSearchRequest {
  type: typeof LOAD_SEARCH_REQUEST;
  searchData: IInputData;
}

export interface LoadSearchSuccess {
  type: typeof LOAD_SEARCH_SUCCESS;
  data: IResponseArticle;
}

export interface LoadSearchFailure {
  type: typeof LOAD_SEARCH_FAILURE;
  error: string;
}

export const loadSearchRequest = (searchData: IInputData): LoadSearchRequest => ({
  type: LOAD_SEARCH_REQUEST,
  searchData,
});

export const loadSearchSuccess = (data: IResponseArticle): LoadSearchSuccess => ({
  type: LOAD_SEARCH_SUCCESS,
  data,
});

export const loadSearchFailure = (error: string): LoadSearchFailure => ({
  type: LOAD_SEARCH_FAILURE,
  error,
});

export type SearchArticles =
  | ReturnType<typeof loadSearchRequest>
  | ReturnType<typeof loadSearchSuccess>
  | ReturnType<typeof loadSearchFailure>;
