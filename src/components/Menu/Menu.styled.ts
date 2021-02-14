import styled from 'styled-components';

interface IStyledMenuProps {
  title?: string;
}

const StyledMenu = styled.ul<{ title?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  li,
  a {
    color: #d2f0ee;
  }

  li {
    margin: 0 0 5px 5px;
    line-height: 38px;
    display: flex;
    align-items: center;

    &.sidebarTitle {
      font-size: 2.6rem;
      text-align: center;
      margin: 10px 15px 0 15px;
      border-bottom: 1px solid #ccc;
      text-transform: capitalize;
    }

    &:nth-child(2) {
      margin-top: ${(props) => (props.title ? '10px' : 'inherit')};
    }
  }
  a {
    display: inline-block;
    font-size: 3rem;
    text-transform: uppercase;
    padding: 5px 10px;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
  }
`;

export default StyledMenu;
