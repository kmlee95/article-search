import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { StyledArticleTitle, StyledSearchHeader, StyledSearchInput, StyledArticleInput } from './styled';
import { loadSearchRequest } from '@/reducers/article/searchArticles';

interface SearchArticleProps {
  title: string;
}

const SearchArticle: React.FC<SearchArticleProps> = ({ title }) => {
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
        <StyledSearchHeader>{title}</StyledSearchHeader>
      </StyledArticleTitle>

      <StyledArticleInput>
        <StyledSearchInput placeholder="input search text" allowClear onSearch={onSearch} />
      </StyledArticleInput>
    </>
  );
};

export default SearchArticle;
