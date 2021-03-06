import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  border-bottom: solid 1px var(--primary-color);
  opacity: 0.9;
  background: var(--dark-color);
  color: #fff;

  ul {
    display: flex;
  }

  a {
    color: #fff;
    padding: 0.45rem;
    margin: 0 0.25rem;
    &:hover {
      color: #343a40;
    }
  }
`;
