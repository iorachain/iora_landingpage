import IoraChain from "../../assets/imgs/iorachain.svg";
import { Image, Navbar } from "react-bootstrap";
import styles from "./styles.module.scss";
import { BrowserView, MobileView } from "react-device-detect";
import Menu from "../../assets/imgs/menu.svg";

const Header = () => {
  return (
    <Navbar id={styles.Header}>
      <Navbar.Brand>
        <div className={styles.navbarBrand}>
          <Image height={45} src={IoraChain} alt="Iora Chain" />
          <span>
            <b>iora</b>chain
          </span>
        </div>
      </Navbar.Brand>
      <BrowserView>
        <div className={styles.navbarButtons}>
          <Navbar.Collapse className={styles.navbarLinks}>
            <span>Features</span>
            <span> • </span>
            <span>Roadmap</span>
            <span> • </span>
            <span>About us</span>
            <span> • </span>
            <span>Token Sale</span>
            <span> • </span>
            <span>Whitepaper</span>
            <span> • </span>
            <span>Dapps</span>
          </Navbar.Collapse>
          <div className={styles.navbarTools}>
            <div>Language</div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <Image height={50} src={Menu} alt="Menu" />
      </MobileView>
    </Navbar>
  );
};

export default Header;
