import IoraChain from "../../assets/imgs/iorachain.svg";
import { Image, Navbar, Container } from "react-bootstrap";
import styles from "./styles.module.scss";

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
      <Navbar.Text>
        <div className={styles.navbarTools}>
          <div>Language</div>
        </div>
      </Navbar.Text>
    </Navbar>
  );
};

export default Header;
