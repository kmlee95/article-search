export const LIKE_ARTICLES_REQUEST = 'LIKE_ARTICLES_REQUEST' as const;
export const LIKE_ARTICLES_SUCCESS = 'LIKE_ARTICLES_SUCCESS' as const;
export const LIKE_ARTICLES_FAILURE = 'LIKE_ARTICLES_FAILURE' as const;

export interface LikeArticlesRequest {
  type: typeof LIKE_ARTICLES_REQUEST;
  articleId: string;
}

export interface LikeArticlesSuccess {
  type: typeof LIKE_ARTICLES_SUCCESS;
}

export interface LikeArticlesFailure {
  type: typeof LIKE_ARTICLES_FAILURE;
  error: string;
}

export const likeArticlesRequest = (articleId: string): LikeArticlesRequest => ({
  type: LIKE_ARTICLES_REQUEST,
  articleId,
});

export const likeArticlesSuccess = (): LikeArticlesSuccess => ({
  type: LIKE_ARTICLES_SUCCESS,
});

export const likeArticlesFailure = (error: string): LikeArticlesFailure => ({
  type: LIKE_ARTICLES_FAILURE,
  error,
});

export type LikeArticles =
  | ReturnType<typeof likeArticlesRequest>
  | ReturnType<typeof likeArticlesSuccess>
  | ReturnType<typeof likeArticlesFailure>;
