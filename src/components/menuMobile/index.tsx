import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Col, Row } from "react-bootstrap";
import BrazilFlag from "../../assets/imgs/br_flag.png";
import USAFlag from "../../assets/imgs/usa_flag.png";
import LatamFlag from "../../assets/imgs/latam_flag.png";
import { Image } from "react-bootstrap";
import Button from "@mui/material/Button";

const MenuMobile = () => {
  const { t, i18n } = useTranslation();

  const style = {
    bgcolor: "background.paper",
    border: "0",
  };

  const handleClose = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div id={styles.MenuMobile}>
        <Link
          to="FeaturesSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span>{t("header.features")}</span>
        </Link>
        <Link
          to="RoadmapSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span>{t("header.roadmap")}</span>
        </Link>
        <Button
          variant="text"
          className={styles.btnLinks}
          href="https://forms.gle/ErD6n5i9YuQ6m3JC6"
        >
          <span>{t("header.tokenSale")}</span>
        </Button>
        <Button
          variant="text"
          className={styles.btnLinks}
          href="https://docs.iorachain.com"
        >
          <span>{t("header.whitepaper")}</span>
        </Button>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          style={style}
          id={styles.SelectLanguages}
        >
          <span>{t("header.languages")}</span>
        </AccordionSummary>
        <AccordionDetails>
          <Row>
            <Col>
              <div
                className={styles.flagsSection}
                onClick={() => handleClose("en")}
              >
                <Image width={50} src={USAFlag} alt="" />
                <span>English (USA)</span>
              </div>
            </Col>
            <Col>
              <div
                className={styles.flagsSection}
                onClick={() => handleClose("ptBr")}
              >
                <Image width={50} src={BrazilFlag} alt="" />
                <span>Português (Brasil)</span>
              </div>
            </Col>
            <Col>
              <div
                className={styles.flagsSection}
                onClick={() => handleClose("esLatam")}
              >
                <Image width={50} src={LatamFlag} alt="" />
                <span>Spanish (Latam)</span>
              </div>
            </Col>
          </Row>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MenuMobile;
