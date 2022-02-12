import styles from "./styles.module.scss";
import { Image, Row, Col } from "react-bootstrap";
import IoraChain from "../../assets/imgs/iorachain.svg";
import { isMobile, BrowserView, MobileView } from "react-device-detect";

const Footer = () => {
  return (
    <div id={styles.Footer}>
      <Row>
        <Col md={4} xs={12} className={styles.footerLogo}>
          <Image height={isMobile ? 40 : 100} src={IoraChain} alt="IoraChain" />
          <span className={styles.logoSubtitle}>
            <b>iora</b>chain
          </span>
          <MobileView>
            <span>Blockchain for LATAM Users. Your new home.</span>
          </MobileView>
        </Col>
        <BrowserView>
          <Col md={2} xs={12} className={styles.footerDapps}>
            <b>Dapps</b>
            <span>IoraPay</span>
            <span>Praora</span>
          </Col>
          <Col md={2} xs={12} className={styles.footerDocumentation}>
            <b>Documentations</b>
            <span>About Us</span>
            <span>Team</span>
            <span>Whitepaper</span>
          </Col>
          <Col md={2} xs={12} className={styles.footerLinks}>
            <b>Links</b>
            <span>Features</span>
            <span>Roadmap</span>
            <span>Token Sale</span>
          </Col>
          <Col md={2} xs={12} className={styles.footerContactUs}>
            <b>Contact Us</b>
            <span>Discord</span>
            <span>Github</span>
            <span>Linkedin</span>
            <span>Instagram</span>
          </Col>
        </BrowserView>
      </Row>
    </div>
  );
};

export default Footer;
