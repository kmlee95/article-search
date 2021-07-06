import { useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadArticlesRequest } from '@/reducers/article/getAllArticles';
import ArticleList from '@/components/ArticleList';
import Loading from '@/components/Loading';
import { useRootState } from '@/hooks/useRootState';
import { StyledSectionFavorite } from './styled';
import SearchArticle from '@/components/SearchArticle';

interface FavoriteProps {}

const Favorite: React.FC<FavoriteProps> = ({}) => {
  const dispatch = useDispatch();
  const { allArticles, likeArticles, loadArticlesLoading } = useRootState((state) => state.article);

  const likeArticlesFilter = useMemo(
    () => allArticles.filter((article) => likeArticles.includes(article._id)),
    [allArticles, likeArticles],
  );

  useEffect(() => {
    dispatch(loadArticlesRequest()); //바로 url 접근했을때를 고려
  }, []);

  return (
    <StyledSectionFavorite>
      <SearchArticle title="즐겨찾기 목록 조회" />
      {!loadArticlesLoading ? <ArticleList article={likeArticlesFilter} /> : <Loading />}
    </StyledSectionFavorite>
  );
};

export default Favorite;
