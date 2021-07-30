import styled from 'styled-components';
import { setType } from './utils/setType';
import { light } from './utils/Colors';
export const Badge = styled.span`
  font-size: 0.8rem;
  padding: 0.1rem;
  text-align: center;
  margin: 0.3rem;
  background: ${light};
  color: #333;
  ${(type) => setType(type)};
`;
