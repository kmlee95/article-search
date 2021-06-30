import { memo } from 'react';

import { ArticleDetail } from '@/types/article';

interface ArticleCardProps {
  articleData: ArticleDetail;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ articleData }) => {
  return (
    <>
      <div>{articleData?.abstract}</div>
    </>
  );
};

export default memo(ArticleCard);
