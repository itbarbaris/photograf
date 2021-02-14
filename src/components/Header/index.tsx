//deps
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Spin as Hamburger } from 'hamburger-react';
import { FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
//components
import Menu from 'components/Menu';
import Sidebar from 'components/Sidebar';
//style
import StyledHeader from './Header.styled';
import { makeId } from 'utils';

const socialLinks = [
  { name: 'instagram', url: '/', icon: <FaInstagram /> },
  { name: 'telegram', url: '/', icon: <FaTelegram /> },
  { name: 'whatsapp', url: '/', icon: <FaWhatsapp /> },
];

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const [btnColor, setBtnColor] = useState('#d2f0ee');

  const { pathname } = useRouter();

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

  //toggling menu, setting interval so sidebar smoothly slide out
  const handleToggleMenu = () => {
    if (isMenuOpen) {
      setIsSidebarVisible(false);

      const timerId = setTimeout(() => setIsMenuOpen(false), 100);
      return () => clearTimeout(timerId);
    } else {
      setIsMenuOpen(true);

      const timerId = setTimeout(() => setIsSidebarVisible(true), 1);
      return () => clearTimeout(timerId);
    }
  };

  return (
    <StyledHeader>
      <nav>
        <section className='socials'>
          {socialLinks.map((link) => {
            const { url, icon } = link;
            const id = makeId(8);

            return (
              <button key={id}>
                <Link href={url}>
                  <a>{icon}</a>
                </Link>
              </button>
            );
          })}
        </section>
        {isSmallScreen && (
          <button type='button' aria-label='кнопка меню'>
            <Hamburger toggled={isMenuOpen} toggle={handleToggleMenu} color={btnColor} />
          </button>
        )}
        {!isSmallScreen && <Menu path={pathname} />}
      </nav>
      {isMenuOpen && (
        <Sidebar isSidebarVisible={isSidebarVisible} handleToggleMenu={handleToggleMenu}>
          <Menu
            path={pathname}
            isMenuOpen={isMenuOpen}
            title='меню'
            handleToggleMenu={handleToggleMenu}
          />
        </Sidebar>
      )}
    </StyledHeader>
  );
};

export default Header;
