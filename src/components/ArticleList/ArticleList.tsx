import { ArticleDetail } from '@/types/article';
import ArticleCard from '@/components/ArticleCard';
import { StyledArticleList } from './styled';

interface ArticleListProps {
  article: ArticleDetail[] | undefined;
}

const ArticleList: React.FC<ArticleListProps> = ({ article }) => {
  return (
    <StyledArticleList>
      {article.map((data, index) => (
        <ArticleCard key={index} articleData={data} />
      ))}
    </StyledArticleList>
  );
};

export default ArticleList;
