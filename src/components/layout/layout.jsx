import { Footer } from './components/footer';
import { Header } from './components/header';

const Layout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </Layout>
  );
};

export default Layout;
