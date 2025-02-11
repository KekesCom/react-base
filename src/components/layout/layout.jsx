import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import styles from './layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <main className={styles.main}>
      <div className={styles.container}> {children} </div>
    </main>
    <Footer />
  </div>
);

export default Layout;
