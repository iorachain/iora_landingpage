import { useState } from "react";
import IoraChain from "../../assets/imgs/iorachain.svg";
import { Image, Navbar } from "react-bootstrap";
import styles from "./styles.module.scss";
import { BrowserView, MobileView } from "react-device-detect";
import MenuToogle from "../../assets/imgs/menu.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";

interface OnClicKEvent {
  currentTarget: unknown;
}

const Header = () => {
  const [t, i18n] = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: OnClicKEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang: string) => {
    i18n.changeLanguage(lang);
    setAnchorEl(null);
  };

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
            <div onClick={handleClick}>{t("header.language")}</div>
            <Menu
              id="langMenu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
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
      <MobileView>
        <Image height={50} src={MenuToogle} alt="Menu" />
      </MobileView>
    </Navbar>
  );
};

export default Header;
