import { Button } from 'antd';

import { ButtonWrap } from './styled';

interface ButtonArticleProps {
  prev: (e: React.MouseEvent<HTMLInputElement>) => void;
  next: (e: React.MouseEvent<HTMLInputElement>) => void;
  pageCount: number;
}

const ButtonArticle: React.FC<ButtonArticleProps> = ({ prev, next, pageCount }) => {
  return (
    <ButtonWrap>
      <Button block type="primary" disabled={pageCount === 0} onClick={prev}>
        Prev
      </Button>
      <Button block type="primary" onClick={next}>
        Next
      </Button>
    </ButtonWrap>
  );
};

export default ButtonArticle;
