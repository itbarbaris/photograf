import Menu from 'components/Menu';
import StyledWrapper from './Sidebar.styled';

interface ISidebarProps {
  isMenuOpen: boolean;
  isSidebarVisible: boolean;
  handleToggleMenu: () => void;
}

const Sidebar: React.FC<ISidebarProps> = ({
  isMenuOpen,
  handleToggleMenu,
  isSidebarVisible,
  children,
}) => {
  return (
    <StyledWrapper isSidebarVisible={isSidebarVisible} isMenuOpen={isMenuOpen}>
      <div onClick={handleToggleMenu} />
      <aside>{children}</aside>
    </StyledWrapper>
  );
};

export default Sidebar;
