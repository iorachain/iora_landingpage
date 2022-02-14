import IoraChain from "../../assets/imgs/iorachain.svg";
import { Image, Navbar } from "react-bootstrap";
import styles from "./styles.module.scss";
import { BrowserView, MobileView } from "react-device-detect";
import Menu from "../../assets/imgs/menu.svg";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

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
            <span>{t("header.features")}</span>
            <span> • </span>
            <span>{t("header.roadmap")}</span>
            <span> • </span>
            <span>{t("header.aboutUs")}</span>
            <span> • </span>
            <span>{t("header.tokenSale")}</span>
            <span> • </span>
            <span>{t("header.whitepaper")}</span>
            <span> • </span>
            <span>{t("header.dapps")}</span>
          </Navbar.Collapse>
          <div className={styles.navbarTools}>
            <div>{t("header.dapps")}</div>
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
