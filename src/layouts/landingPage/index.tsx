import { Outlet } from "react-router";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./styles.module.scss";

const Layout = () => {
  return (
    <div id={styles.Layout}>
      <header id={styles.Header}>
        <Header />
      </header>
      <section id={styles.Content}>
        <Outlet />
      </section>
      <div id={styles.Footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
