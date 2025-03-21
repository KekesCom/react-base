import { useState } from 'react';

import { BurgerIcon, CloseIcon, PhoneIcon } from '@/assets/icons';
import { Link } from '@/components/link';
import { useScrollLock } from '@/hooks';

import styles from './mobile-navbar.module.scss';

export const MobileNavbar = ({ navbarItems }) => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const handleMobileNavbarOpen = () => {
    setIsMobileNavbarOpen(true);
    lockScroll();
  };

  const handleMobileNavbarClose = () => {
    setIsMobileNavbarOpen(false);
    unlockScroll();
  };

  return (
    <>
      <div className={styles.buttons}>
        <a href="tel:+7800001122" className={styles.iconButton}>
          <PhoneIcon />
        </a>
        <button onClick={handleMobileNavbarOpen} className={styles.iconButton}>
          <BurgerIcon />
        </button>
      </div>

      {isMobileNavbarOpen && (
        <div className={styles.burgerMenu}>
          <nav>
            <ul className={styles.links}>
              {navbarItems.map((link) => (
                <li key={link.id} onClick={handleMobileNavbarClose}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={handleMobileNavbarClose}
            className={`${styles.closeMenu} ${styles.iconButton}`}
          >
            <CloseIcon />
          </button>
        </div>
      )}
    </>
  );
};
