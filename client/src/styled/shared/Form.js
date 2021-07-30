import styled from 'styled-components';
import { setType } from './utils/setType';
import { light } from './utils/Colors';
export const Form = styled.form`
  input[type='text'],
  input[type='email'],
  input[type='password'],
  input[type='date'],
  input[type='number'],
  select,
  textarea {
    display: block;
    width: 100%;
    padding: 0.4rem;
    font-size: 1.2rem;
    border: 1px solid #ccc;
  }
  input[type='submit'] {
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
    ${(type) => setType(type)};
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const FormGroup = styled.div`
  margin: 1.2rem 0;
`;
