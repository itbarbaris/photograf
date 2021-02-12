import Link from 'next/link';
import { makeId } from 'utils';
import StyledMenu from './Menu.styled';

interface IMenuLinks {
  name: string;
  url: string;
}

interface IMenuProps {
  links?: IMenuLinks[];
  title?: string;
  handleToggleMenu?: () => void;
}

const initialLinks = [
  { name: 'на главную', url: '/' },
  { name: 'мои работы', url: '/portfolio' },
  { name: 'прайс', url: '/price' },
  { name: 'онлайн запись', url: '/booking' },
  { name: 'контакты', url: '/contacts' },
];

const Menu: React.FC<IMenuProps> = ({
  links = initialLinks,
  title,
  handleToggleMenu,
}) => {
  return (
    <StyledMenu>
      <li className='sidebarTitle'>{title}</li>
      {links.map((link) => {
        const { name, url } = link;
        const id = makeId(8);

        return (
          <li key={id}>
            <Link href={url}>
              <a onClick={handleToggleMenu}>{name}</a>
            </Link>
          </li>
        );
      })}
    </StyledMenu>
  );
};

export default Menu;
