import React, { useState } from "react";
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
import { Link } from "react-scroll";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MenuContainer from "../menuMobile";
import Button from "@mui/material/Button";

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

  const [openModal, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    bgcolor: "background.paper",
    border: "0",
    boxShadow: 24,
    p: 4,
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
                <Link
                  to="FeaturesSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>{t("header.features")}</span>
                </Link>
                <span> • </span>
                <Link
                  to="RoadmapSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>{t("header.roadmap")}</span>
                </Link>
                <span> • </span>
                <span>
                  <Button
                    variant="text"
                    className={styles.btnLinks}
                    href="https://forms.gle/ErD6n5i9YuQ6m3JC6"
                  >
                    <span>{t("header.tokenSale")}</span>
                  </Button>
                </span>
                <span> • </span>
                <span>
                  <Button
                    variant="text"
                    className={styles.btnLinks}
                    href="https://docs.iorachain.com"
                  >
                    <span>{t("header.whitepaper")}</span>
                  </Button>
                </span>
              </div>

              <div className={styles.navbarTools}>
                <div onClick={handleClick}>
                  <Image src={GlobalImg} height={30} />
                </div>
                <Menu
                  anchorEl={anchorEl}
                  className="d-flex flex-column"
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "langs-button",
                  }}
                >
                  <div id={styles.langMenu}>
                    <MenuItem onClick={() => handleClose("en")}>
                      English (USA)
                    </MenuItem>
                    <MenuItem onClick={() => handleClose("ptBr")}>
                      Português (Brasil)
                    </MenuItem>
                    <MenuItem onClick={() => handleClose("esLatam")}>
                      Spanish (Latin America)
                    </MenuItem>
                  </div>
                </Menu>
              </div>
            </div>
          </BrowserView>
        </Col>
        <MobileView>
          <Col sm={4}>
            <div onClick={handleClickOpen}>
              <Image height={50} src={MenuToogle} alt="Menu" />
            </div>
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <MenuContainer />
              </Box>
            </Modal>
          </Col>
        </MobileView>
      </Navbar>
    </Row>
  );
};

export default Header;
