import { memo } from 'react';
import { Card } from 'antd';

import { ArticleDetail } from '@/types/article';
import { StyledArticleCard } from './styled';

interface ArticleCardProps {
  articleData: ArticleDetail;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ articleData }) => {
  return (
    <>
      <StyledArticleCard
        hoverable
        onClick={() => window.open(`${articleData.web_url}`, '_blank')}
        cover={
          <img
            alt="example"
            src={
              articleData.multimedia[0]?.url
                ? `https://www.nytimes.com/${articleData.multimedia[0]?.url}`
                : `https://i.pinimg.com/originals/c9/22/68/c92268d92cf2dbf96e3195683d9e14fb.png`
            }
            height="240"
          />
        }
      >
        <Card.Meta
          title={articleData?.headline.main}
          description={articleData?.abstract.length > 30 ? `${articleData.abstract.substring(0, 40)} ...` : `No data..`}
        />
      </StyledArticleCard>
    </>
  );
};

export default memo(ArticleCard);
