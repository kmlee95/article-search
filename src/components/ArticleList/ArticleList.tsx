import { ArticleDetail } from '@/types/article';
import ArticleCard from '@/components/ArticleCard';

interface ArticleListProps {
  article: ArticleDetail[] | null;
}

const ArticleList: React.FC<ArticleListProps> = ({ article }) => {
  console.log(article);
  return (
    <>
      <div></div>
      {article ? article.map((data, index) => <ArticleCard key={index} articleData={data} />) : <div>loading..</div>}
    </>
  );
};

export default ArticleList;
