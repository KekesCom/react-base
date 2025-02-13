import { Footer } from './components/footer';
import { Header } from './components/header';

import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}> {children} </div>
      </main>
      <Footer />
    </>
  );
};
export default Layout;
