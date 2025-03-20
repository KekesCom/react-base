import { Link } from '@/components/link';

import { PhoneCallButton } from '../../../../../phone-call-button';

import styles from './desktop-navbar.module.scss';

export const DesktopNavbar = ({ navbarItems }) => {
  return (
    <>
      <nav>
        <ul className={styles.navbar}>
          {navbarItems.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <PhoneCallButton />
    </>
  );
};
