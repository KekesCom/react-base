import { PhoneCallButton } from '@/components/layout/components/phone-call-button';
import { Link } from '@/components/link';

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
