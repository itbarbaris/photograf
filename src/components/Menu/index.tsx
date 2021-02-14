//deps
import Link from 'next/link';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';
//helpers
import { makeId } from 'utils';
//styles
import StyledMenu from './Menu.styled';

interface IMenuLinks {
  name: string;
  url: string;
}

interface IMenuProps {
  path?: string;
  links?: IMenuLinks[];
  title?: string;
  isMenuOpen?: boolean;
  handleToggleMenu?: () => void;
}

const initialLinks = [
  { name: 'главная', url: '/' },
  { name: 'мои работы', url: '/portfolio' },
  { name: 'прайс', url: '/price' },
  { name: 'онлайн запись', url: '/booking' },
  { name: 'контакты', url: '/contacts' },
];

const Menu: React.FC<IMenuProps> = ({
  path,
  title,
  isMenuOpen,
  handleToggleMenu,
  links = initialLinks,
}) => {
  return (
    <StyledMenu title={title}>
      {title && <li className='sidebarTitle'>{title}</li>}
      {links.map((link) => {
        const { name, url } = link;
        const id = makeId(8);
        const isCurrentPage = isMenuOpen && url === path;

        return (
          <li key={id}>
            {isCurrentPage && <GoTriangleRight />}
            <Link href={url}>
              <a onClick={handleToggleMenu}>{name}</a>
            </Link>
            {isCurrentPage && <GoTriangleLeft />}
          </li>
        );
      })}
    </StyledMenu>
  );
};

export default Menu;
