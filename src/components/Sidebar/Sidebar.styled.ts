import styled from 'styled-components';

interface ISidebarWrapperProps {
  isMenuOpen: boolean;
  isSidebarVisible: boolean;
}

const StyledSidebarWrapper = styled.section<ISidebarWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  overflow: hidden;
  transform: ${(props) => (props.isMenuOpen ? 'scale(1)' : 'scale(0)')};

  & > div {
    width: 60%;
    transition: 0.5s all;
    transform: ${(props) => (props.isSidebarVisible ? 'translateX(0)' : 'translateX(-200%)')};
    background-color: #ccc;
  }

  & > aside {
    width: 40%;
    min-width: 200px;
    max-width: 600px;
    transition: 0.5s all;
    background-color: darkseagreen;
    transform: ${(props) => (props.isSidebarVisible ? 'translateX(0)' : 'translateX(200%)')};
  }
`;

export default StyledSidebarWrapper;
