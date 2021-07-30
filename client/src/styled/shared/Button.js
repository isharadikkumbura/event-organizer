import styled from 'styled-components';
import { setType } from './utils/setType';
import { light } from './utils/Colors';
export const Button = styled.span`
  display: inline-block;
  background: ${light};
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  &:hover {
    opacity: 0.8;
  }
  ${(type) => setType(type)};
`;
