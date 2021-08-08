import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import ArticleList from '@/components/ArticleList';
import Loading from '@/components/Loading';
import SearchArticle from '@/components/SearchArticle';
import { useRootState } from '@/hooks/useRootState';
import { loadArticlesRequest } from '@/reducers/article/getAllArticles';
import { StyledSectionScrollEvent } from './styled';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

interface ScrollEventProps {}

//ScrollEvent
const ScrollEvent: React.FC<ScrollEventProps> = ({}) => {
  const dispatch = useDispatch();

  const fetchArticle = () => {
    setPageCount((prev) => prev + 10);
    setIsFetching(false);
  };

  const [pageCount, setPageCount] = useState(0);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchArticle);
  const { allArticles } = useRootState((state) => state.article);

  useEffect(() => {
    dispatch(loadArticlesRequest(pageCount));
  }, [pageCount]);

  return (
    <StyledSectionScrollEvent>
      <SearchArticle title="전체 기사목록 조회" />
      <ArticleList article={allArticles} />
      {isFetching && <Loading />}
    </StyledSectionScrollEvent>
  );
};

export default ScrollEvent;
