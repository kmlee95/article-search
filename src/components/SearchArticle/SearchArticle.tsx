import { Input } from 'antd';
import { useCallback } from 'react';

interface SearchArticleProps {}

const SearchArticle: React.FC<SearchArticleProps> = ({}) => {
  const onSearch = useCallback((value) => {
    console.log(value);
  }, []);
  return (
    <>
      <div>전체 기사목록 조회</div>
      <Input.Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
    </>
  );
};

export default SearchArticle;
