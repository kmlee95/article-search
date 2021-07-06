import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useRootState } from '@/hooks/useRootState';
import { loadArticlesRequest } from '@/reducers/article/getAllArticles';
import SearchArticle from '@/components/SearchArticle';
import ArticleList from '@/components/ArticleList';
import Loading from '@/components/Loading';
import ButtonArticle from '@/components/ButtonArticle';

import { StyledSectionHome } from './styled';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const dispatch = useDispatch();
  const [pageCount, setPageCount] = useState(0);
  const { allArticles, loadArticlesLoading, loadSearchLoading } = useRootState((state) => state.article);

  const onClickPrev = useCallback(() => {
    setPageCount((prev) => prev - 10);
  }, [pageCount]);

  const onClickNext = useCallback(() => {
    setPageCount((prev) => prev + 10);
  }, [pageCount]);

  useEffect(() => {
    dispatch(loadArticlesRequest(pageCount));
  }, [pageCount]);

  return (
    <StyledSectionHome>
      <SearchArticle title="전체 기사목록 조회" />
      <ButtonArticle prev={onClickPrev} next={onClickNext} pageCount={pageCount} />
      {!loadArticlesLoading && !loadSearchLoading ? <ArticleList article={allArticles} /> : <Loading />}
    </StyledSectionHome>
  );
};

export default Home;
