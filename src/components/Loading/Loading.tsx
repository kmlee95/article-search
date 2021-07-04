import Loader from 'react-loader-spinner';

import { LoadingContainer, LoadingText } from './styled';

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <LoadingContainer>
      <LoadingText>데이터를 불러오고 있습니다.</LoadingText>
      <Loader type="Oval" color="#3d66ba" height={100} width={100} timeout={4000} />
    </LoadingContainer>
  );
};

export default Loading;
