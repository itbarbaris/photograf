import styled from 'styled-components';

interface ISidebarWrapperProps {
  isSidebarVisible: boolean;
}

const StyledSidebarWrapper = styled.section<ISidebarWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  display: flex;

  & > div {
    width: 60%;
    transition: 0.1s all;
    transform: ${(props) =>
      props.isSidebarVisible ? 'translateX(0)' : 'translateX(-100%)'};
    background-color: rgba(0, 0, 0, 0.3);
  }

  & > aside {
    width: 40%;
    min-width: 200px;
    max-width: 600px;
    transition: 0.1s all;
    background-color: #136b66;
    transform: ${(props) =>
      props.isSidebarVisible ? 'translateX(0)' : 'translateX(100%)'};
    box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.39), 0 -6px 6px rgba(0, 0, 0, 0.23);
  }
`;

export default StyledSidebarWrapper;
