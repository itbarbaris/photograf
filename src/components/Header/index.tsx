//deps
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Spin as Hamburger } from 'hamburger-react';
//components
import Menu from 'components/Menu';
//style
import StyledHeader from './Header.styled';
import Sidebar from 'components/Sidebar';

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  //setting new screenWidth on resize
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let screenWidth = window.innerWidth;
      setScreenWidth(screenWidth);

      const handleResizing = () => {
        screenWidth = window.innerWidth;
        setScreenWidth(screenWidth);
      };

      window.addEventListener('resize', handleResizing);

      return () => window.removeEventListener('resize', handleResizing);
    }
  }, []);

  //setting isSmallScreen
  useEffect(() => {
    if (screenWidth < 1200) setIsSmallScreen(true);
    else setIsSmallScreen(false);
  }, [screenWidth]);

  const handleToggleMenu = () => {
    if (isMenuOpen) {
      setIsSidebarVisible(false);
      const timerId = setTimeout(() => setIsMenuOpen(false), 100);
      return () => clearTimeout(timerId);
    } else {
      setIsMenuOpen(true);
      setIsSidebarVisible(true);
    }
  };

  return (
    <StyledHeader>
      {isSmallScreen && (
        <button type='button' aria-label='кнопка меню'>
          <Hamburger toggled={isMenuOpen} toggle={handleToggleMenu} />
        </button>
      )}
      <nav>
        <Link href='/'>
          <a>Алла Сваровская</a>
        </Link>
        {!isSmallScreen && <Menu />}
      </nav>
      <Sidebar
        isMenuOpen={isMenuOpen}
        isSidebarVisible={isSidebarVisible}
        handleToggleMenu={handleToggleMenu}
      >
        <Menu title='меню' handleToggleMenu={handleToggleMenu} />
      </Sidebar>
    </StyledHeader>
  );
};

export default Header;
