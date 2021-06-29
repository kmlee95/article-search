import { ContentArticleResponse, IAllArticlesData } from '@/types/article';
import ArticleCard from '@/components/ArticleCard';

interface ArticleListProps {
  article: ContentArticleResponse | null;
}

const ArticleList: React.FC<ArticleListProps> = ({ article }) => {
  return (
    <>
      <div></div>
      {article ? <ArticleCard /> : <div>loading..</div>}
    </>
  );
};

export default ArticleList;
