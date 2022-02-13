import styles from "./styles.module.scss";
import { Image, Row, Col, Container } from "react-bootstrap";
import IoraChain from "../../assets/imgs/iorachain.svg";
import { isMobile, BrowserView, MobileView } from "react-device-detect";

const Footer = () => {
  return (
    <div id={styles.Footer}>
      <Container>
        <Row>
          <div className={styles.footerDirection}>
            <Col md={4} className={styles.footerLogo}>
              <Image
                width={isMobile ? 15 : 30}
                src={IoraChain}
                alt="IoraChain"
              />
              <span className={styles.logoTitle}>
                <b>iora</b>chain
              </span>
              <MobileView>
                <span className={styles.logoSubTitle}>
                  Blockchain for LATAM Users. Your new home.
                </span>
              </MobileView>
            </Col>
            <Col md={8}>
              <BrowserView>
                <div className={styles.footerDirection}>
                  <Col md={3} sm={12} className={styles.footerDapps}>
                    <b>Dapps</b>
                    <span>IoraPay</span>
                    <span>Praora</span>
                  </Col>
                  <Col md={3} className={styles.footerDocumentation}>
                    <b>Documentations</b>
                    <span>About Us</span>
                    <span>Team</span>
                    <span>Whitepaper</span>
                  </Col>
                  <Col md={3} className={styles.footerLinks}>
                    <b>Links</b>
                    <span>Features</span>
                    <span>Roadmap</span>
                    <span>Token Sale</span>
                  </Col>
                  <Col md={3} className={styles.footerContactUs}>
                    <b>Contact Us</b>
                    <span>Discord</span>
                    <span>Github</span>
                    <span>Linkedin</span>
                    <span>Instagram</span>
                  </Col>
                </div>
              </BrowserView>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
