import styled from 'styled-components';

const StyledMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;

  li,
  a {
    color: #323232;
  }

  li {
    margin: 0 0 5px 5px;

    &.sidebarTitle {
      font-size: 3rem;
      text-align: center;
      margin: 10px 15px 0 15px;
      border-bottom: 1px solid #ccc;
      text-transform: capitalize;
    }

    &:nth-child(2) {
      margin-top: 10px;
    }
  }
  a {
    display: inline-block;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 5px 10px;
  }
`;

export default StyledMenu;
