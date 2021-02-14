import Menu from 'components/Menu';
import StyledWrapper from './Sidebar.styled';

interface ISidebarProps {
  isSidebarVisible: boolean;
  handleToggleMenu: () => void;
}

const Sidebar: React.FC<ISidebarProps> = ({
  handleToggleMenu,
  isSidebarVisible,
  children,
}) => {
  return (
    <StyledWrapper isSidebarVisible={isSidebarVisible}>
      <div onClick={handleToggleMenu} />
      <aside>{children}</aside>
    </StyledWrapper>
  );
};

export default Sidebar;
