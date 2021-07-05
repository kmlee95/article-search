export const UNLIKE_ARTICLES_REQUEST = 'UNLIKE_ARTICLES_REQUEST' as const;
export const UNLIKE_ARTICLES_SUCCESS = 'UNLIKE_ARTICLES_SUCCESS' as const;
export const UNLIKE_ARTICLES_FAILURE = 'UNLIKE_ARTICLES_FAILURE' as const;

export interface UnLikeArticlesRequest {
  type: typeof UNLIKE_ARTICLES_REQUEST;
  articleId: string;
}

export interface UnLikeArticlesSuccess {
  type: typeof UNLIKE_ARTICLES_SUCCESS;
}

export interface UnLikeArticlesFailure {
  type: typeof UNLIKE_ARTICLES_FAILURE;
  error: string;
}

export const unlikeArticlesRequest = (articleId: string): UnLikeArticlesRequest => ({
  type: UNLIKE_ARTICLES_REQUEST,
  articleId,
});

export const unlikeArticlesSuccess = (): UnLikeArticlesSuccess => ({
  type: UNLIKE_ARTICLES_SUCCESS,
});

export const unlikeArticlesFailure = (error: string): UnLikeArticlesFailure => ({
  type: UNLIKE_ARTICLES_FAILURE,
  error,
});

export type UnLikeArticles =
  | ReturnType<typeof unlikeArticlesRequest>
  | ReturnType<typeof unlikeArticlesSuccess>
  | ReturnType<typeof unlikeArticlesFailure>;
