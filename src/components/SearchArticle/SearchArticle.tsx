import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { StyledArticleTitle, StyledSearchHeader, StyledSearchInput, StyledArticleInput } from './styled';
import { loadSearchRequest } from '@/reducers/article/searchArticles';

interface SearchArticleProps {}

const SearchArticle: React.FC<SearchArticleProps> = ({}) => {
  const dispatch = useDispatch();
  const onSearch = useCallback(
    (e) => {
      dispatch(loadSearchRequest(e));
    },
    [dispatch],
  );

  return (
    <>
      <StyledArticleTitle>
        <StyledSearchHeader>전체 기사목록 조회</StyledSearchHeader>
      </StyledArticleTitle>

      <StyledArticleInput>
        <StyledSearchInput placeholder="input search text" allowClear onSearch={onSearch} />
      </StyledArticleInput>
    </>
  );
};

export default SearchArticle;
