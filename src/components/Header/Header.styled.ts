import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;

  .socials {
    a {
      color: #d2f0ee;
      font-size: 3.5rem;
      margin: 0 5px;
    }
  }
  button {
    z-index: 2;
    background-color: transparent;
    border: none;
    padding: 6px;
  }
  & > a {
    color: #d2f0ee;
    font-size: 3rem;
    margin-left: 5px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  @media screen and (min-width: 1200px) {
    & > a {
      font-size: 4em;
    }
  }
`;

export default StyledHeader;
