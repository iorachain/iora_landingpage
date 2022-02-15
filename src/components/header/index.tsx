import { useState } from "react";
import IoraChain from "../../assets/imgs/iorachain.svg";
import { Image, Navbar, Col, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { BrowserView, MobileView } from "react-device-detect";
import MenuToogle from "../../assets/imgs/menu.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import GlobalImg from "../../assets/imgs/globalFavicon.svg";
import { useEffect } from "react";

interface OnClicKEvent {
  currentTarget: unknown;
}

const Header = () => {
  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);
  const [lang, setLang] = useState("");

  const open = Boolean(anchorEl);

  const handleClick = (event: OnClicKEvent) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const handleClose = (lang: string) => {
    setLang(lang);
    setAnchorEl(null);
  };

  return (
    <Row>
      <Navbar id={styles.Header}>
        <Col md={2}>
          <div className={styles.navbarBrand}>
            <Image height={45} src={IoraChain} alt="Iora Chain" />
            <span>
              <b>iora</b>chain
            </span>
          </div>
        </Col>
        <Col md={10}>
          <BrowserView>
            <div className={styles.navbarButtons}>
              <div className={styles.navbarLinks}>
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
              </div>

              <div className={styles.navbarTools}>
                <div onClick={handleClick}>
                  <Image src={GlobalImg} height={30} />
                </div>
                <Menu
                  id="langMenu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "langs-button",
                  }}
                >
                  <MenuItem onClick={() => handleClose("en")}>
                    English (USA)
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("ptBr")}>
                    Português (Brasil)
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("esLatam")}>
                    Spanish (Latin America)
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </BrowserView>
        </Col>
        <MobileView>
          <Col sm={4}>
            <Image height={50} src={MenuToogle} alt="Menu" />
          </Col>
        </MobileView>
      </Navbar>
    </Row>
  );
};

export default Header;
