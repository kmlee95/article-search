import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useRootState } from '@/hooks/useRootState';
import { loadArticlesRequest } from '@/reducers/article/getAllArticles';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const dispatch = useDispatch();
  const data = useRootState((state) => state.article);

  useEffect(() => {
    dispatch(loadArticlesRequest());
  }, []);

  return <div>Home</div>;
};

export default Home;
