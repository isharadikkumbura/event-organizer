import styled from 'styled-components';
import { setTextType } from './utils/setTextType';

export const Text = styled.h1`
  font-size: 2.5rem;
  padding: 0.3rem;
  line-height: 1.2;
  margin-bottom: 1rem;

  ${(type) => setTextType(type)};
`;
