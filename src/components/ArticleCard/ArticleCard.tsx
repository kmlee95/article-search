import { memo } from 'react';
import { Card } from 'antd';

import { ArticleDetail } from '@/types/article';

interface ArticleCardProps {
  articleData: ArticleDetail;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ articleData }) => {
  return (
    <>
      <Card
        hoverable
        onClick={() => window.open(`${articleData.web_url}`, '_blank')}
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Card.Meta
          title={articleData?.headline.main}
          description={articleData.abstract.length > 30 ? `${articleData.abstract.substring(0, 30)} ...` : `No data..`}
        />
      </Card>
    </>
  );
};

export default memo(ArticleCard);
