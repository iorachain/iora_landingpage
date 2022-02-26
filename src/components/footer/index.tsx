import styles from "./styles.module.scss";
import { Image, Row, Col, Container } from "react-bootstrap";
import IoraChain from "../../assets/imgs/iorachain.svg";
import { isMobile, BrowserView, MobileView } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { Button } from "@material-ui/core";
import { Link } from "react-scroll";

const Footer = () => {
  const [t] = useTranslation();

  return (
    <Container fluid id={styles.Footer}>
      <div className={styles.footerDirection}>
        <Row>
          <Col md={2}>
            <div className={styles.footerLogo}>
              <Image
                width={isMobile ? 80 : 30}
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
            </div>
          </Col>
          <Col md={10}>
            <BrowserView>
              <Row>
                <div className={styles.footerDirection}>
                  <Col md={4} className={styles.footerDocumentation}>
                    <b>{t("footer.documentations")}</b>
                    <span>
                      <Button
                        variant="text"
                        className={styles.btnLinks}
                        href="https://info.iorachain.com"
                      >
                        {t("footer.whitepaper")}
                      </Button>
                    </span>
                  </Col>
                  <Col md={4} className={styles.footerLinks}>
                    <b>Links</b>
                    <Link
                      to="FeaturesSection"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className={styles.btnCursor}
                    >
                      <span>{t("header.features")}</span>
                    </Link>
                    <Link
                      to="RoadmapSection"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className={styles.btnCursor}
                    >
                      <span>{t("header.roadmap")}</span>
                    </Link>
                    <span>
                      <Button
                        variant="text"
                        className={styles.btnLinks}
                        href="https://forms.gle/ErD6n5i9YuQ6m3JC6"
                      >
                        <span>{t("header.tokenSale")}</span>
                      </Button>
                    </span>
                  </Col>
                  <Col md={4} className={styles.footerContactUs}>
                    <b>{t("footer.contactUs")}</b>
                    <span>
                      <Button
                        variant="text"
                        className={styles.btnLinks}
                        href="https://discord.gg/9pCfzNwVRU"
                      >
                        Discord
                      </Button>
                    </span>
                    <span>
                      <Button
                        variant="text"
                        className={styles.btnLinks}
                        href="https://github.com/iorachain"
                      >
                        Github
                      </Button>
                    </span>
                    <span>
                      <Button
                        variant="text"
                        className={styles.btnLinks}
                        href="https://www.linkedin.com/company/iorachain"
                      >
                        Linkedin
                      </Button>
                    </span>
                    <span>
                      <Button
                        variant="text"
                        className={styles.btnLinks}
                        href="https://www.instagram.com/iorachain/"
                      >
                        Instagram
                      </Button>
                    </span>
                  </Col>
                </div>
              </Row>
            </BrowserView>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Footer;
