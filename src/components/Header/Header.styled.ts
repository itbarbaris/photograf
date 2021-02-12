import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;

  button {
    z-index: 2;
    background-color: transparent;
    border: none;
    padding: 1        0px;

    .hamburger-react {
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & > a {
      font-size: 3rem;
    }
  }
`;

export default StyledHeader;
