import { useWindowSize } from '@/hooks';

import { DesktopNavbar } from './devices/desktop/desktop-navbar';
import { MobileNavbar } from './devices/mobile/mobile-navbar';

const navbarItems = [
  {
    id: 1,
    title: 'О школе',
    href: '#status',
  },
  {
    id: 2,
    title: 'Тренеры',
    href: '#teachers',
  },
  {
    id: 3,
    title: 'Стоимость',
    href: '#packages',
  },
];

export const Navbar = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width <= 1024 ? (
        <MobileNavbar navbarItems={navbarItems} />
      ) : (
        <DesktopNavbar navbarItems={navbarItems} />
      )}
    </>
  );
};
