import styled from 'styled-components';
import { setType } from './utils/setType';

export const Background = styled.span`
  background-color: red;
  ${(type) => setType(type)};
`;
