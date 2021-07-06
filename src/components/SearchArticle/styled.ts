import styled from '@emotion/styled';
import { Input } from 'antd';

export const StyledArticleTitle = styled.div`
  position: static;
  text-align: center;
  width: 100%;
`;

export const StyledSearchHeader = styled.h2`
  font-size: 40px;
  color: #000000;
`;

export const StyledSearchInput = styled(Input.Search)`
  margin-left: auto;
  width: 400px;
`;

export const StyledArticleInput = styled.div`
  position: relative;
  text-align: right;
  padding-right: 20px;
  width: 100%;
`;
