import styled from 'styled-components';
import background from '../../img/showcase.jpg';

export const Container = styled.section`
  position: relative;
  background: url(${background}) no-repeat center center/cover;
  height: 100vh;
`;

export const DarkOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const Inner = styled.div`
  color: #fff;
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const Heading = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

export const Buttons = styled.div`
  margin-top: 20px;
`;
