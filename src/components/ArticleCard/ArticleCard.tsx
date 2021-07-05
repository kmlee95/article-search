import { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from 'antd';
import { HeartTwoTone, HomeOutlined } from '@ant-design/icons';

import { ArticleDetail } from '@/types/article';
import { likeArticlesRequest } from '@/reducers/article/likeArticles';
import { StyledArticleCard } from './styled';
import { useEffect } from 'react';
import { useRootState } from '@/hooks/useRootState';

interface ArticleCardProps {
  articleData: ArticleDetail;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ articleData }) => {
  const dispatch = useDispatch();
  const { likeArticles } = useRootState((state) => state.article);

  const [like, setLike] = useState(false); //like check

  useEffect(() => {
    if (likeArticles.indexOf(articleData._id) >= 0) {
      setLike(true);
    }
  }, [likeArticles]);

  const onClickLikeArticle = useCallback(() => {
    console.log(like);
    if (!like) {
      dispatch(likeArticlesRequest(articleData._id));
    }
  }, [like]);

  return (
    <>
      <StyledArticleCard
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
        actions={[
          <HeartTwoTone twoToneColor={like ? '#eb2f96' : '#999999'} key="heart" onClick={onClickLikeArticle} />,
          <HomeOutlined key="homepage" onClick={() => window.open(`${articleData.web_url}`, '_blank')} />,
        ]}
      >
        <Card.Meta
          title={articleData?.headline.main}
          description={
            articleData?.abstract.length > 50
              ? `${articleData.abstract.substring(0, 50)} ...`
              : `${articleData.abstract}`
          }
        />
      </StyledArticleCard>
    </>
  );
};

export default memo(ArticleCard);
