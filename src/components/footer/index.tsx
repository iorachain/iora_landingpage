import styles from "./styles.module.scss";
import { Image, Row, Col, Container } from "react-bootstrap";
import IoraChain from "../../assets/imgs/iorachain.svg";
import { isMobile, BrowserView, MobileView } from "react-device-detect";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation();

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
                  {t("dapps.ioraChainTitle")}
                </span>
              </MobileView>
            </Col>
            <Col md={8}>
              <BrowserView>
                <div className={styles.footerDirection}>
                  <Col md={3} sm={12} className={styles.footerDapps}>
                    <b>{t("footer.dapps")}</b>
                    <span>IoraPay</span>
                    <span>Praora</span>
                  </Col>
                  <Col md={3} className={styles.footerDocumentation}>
                    <b>{t("footer.documentations")}</b>
                    <span>{t("footer.aboutUs")}</span>
                    <span>{t("footer.team")}</span>
                    <span>{t("footer.whitepaper")}</span>
                  </Col>
                  <Col md={3} className={styles.footerLinks}>
                    <b>Links</b>
                    <span>{t("footer.features")}</span>
                    <span>{t("footer.roadmap")}</span>
                    <span>{t("footer.tokenSale")}</span>
                  </Col>
                  <Col md={3} className={styles.footerContactUs}>
                    <b>{t("footer.contactUs")}</b>
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
