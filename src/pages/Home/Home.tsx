import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useRootState } from '@/hooks/useRootState';
import { loadArticlesRequest } from '@/reducers/article/getAllArticles';
import SearchArticle from '@/components/SearchArticle';
import ArticleList from '@/components/ArticleList';
import { StyledSectionHome } from './styled';
import Loading from '@/components/Loading';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const dispatch = useDispatch();
  const { allArticles, loadArticlesLoading, loadSearchLoading } = useRootState((state) => state.article);

  useEffect(() => {
    dispatch(loadArticlesRequest());
  }, []);

  return (
    <StyledSectionHome>
      <SearchArticle title="전체 기사목록 조회" />
      {!loadArticlesLoading && !loadSearchLoading ? <ArticleList article={allArticles} /> : <Loading />}
    </StyledSectionHome>
  );
};

export default Home;
