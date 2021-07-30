import styled from 'styled-components';
import { light } from './utils/Colors';
import { setType } from './utils/setType';
export const AlertDiv = styled.div`
  padding: 0.8rem;
  margin: 1rem 0;
  opacity: 0.9;
  background: var(${light});
  color: #333;
  ${(type) => setType(type)};
`;
