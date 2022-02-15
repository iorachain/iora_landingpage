import styles from "./style.module.scss";
import { Row, Col, Image } from "react-bootstrap";
import ArrowUp from "../../assets/imgs/arrowUp.svg";
import BarProgress from "../UI/barProgress";
import { isMobile, BrowserView, MobileView } from "react-device-detect";
import { useTranslation } from "react-i18next";

const Roadmap = () => {
  const { t } = useTranslation();

  return (
    <section id={styles.Roadmap}>
      <div className={styles.sectionRoadMap}>
        <div className={styles.titleRoadMap}>Roadmap</div>
        <Row className={styles.titleRow}>
          <Col xs={2} md={4} className={styles.roadMapLine}>
            <div className={styles.roadMapDescription}>
              <Image src={ArrowUp} alt="Arrow Up" width={isMobile ? 30 : ""} />
              <BrowserView>
                <div className={"d-flex p-3"}>
                  <div>
                    <b>{t("roadMap.20202stSemester")}</b>
                    <div>{t("roadMap.research")}</div>
                  </div>
                </div>
              </BrowserView>
            </div>
          </Col>
          <Col xs={10} md={8} className={styles.roadMapDescriptionText}>
            <MobileView>
              <b>{t("roadMap.20211stSemester")}</b>
              <div>{t("roadMap.research")}</div>
            </MobileView>
            {t("roadMap.CDBCsDescription")}
            <div className={styles.barProgress}>
              <BarProgress perCent={10000} width={isMobile ? 280 : 550} />
            </div>
            <div className={styles.statusProgress}>
              <div>{t("roadMap.progress")}</div>
              <div>100%</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={4} className={styles.roadMapLine}>
            <div className={styles.roadMapDescription}>
              <Image src={ArrowUp} alt="Arrow Up" width={isMobile ? 30 : ""} />
              <BrowserView>
                <div className={"d-flex p-3"}>
                  <div>
                    <b>{t("roadMap.20211stSemester")}</b>
                    <div>{t("roadMap.investmentsHire")}</div>
                  </div>
                </div>
              </BrowserView>
            </div>
          </Col>
          <Col xs={10} md={8} className={styles.roadMapDescriptionText}>
            <MobileView>
              <b>{t("roadMap.20211stSemester")}</b>
              <div>{t("roadMap.investmentsHire")}</div>
            </MobileView>
            {t("roadMap.investmentsHireDescription")}
            <div className={styles.barProgress}>
              <BarProgress perCent={10000} width={isMobile ? 280 : 550} />
            </div>
            <div className={styles.statusProgress}>
              <div>{t("roadMap.progress")}</div>
              <div>100%</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={4} className={styles.roadMapLine}>
            <div className={styles.roadMapDescription}>
              <Image src={ArrowUp} alt="Arrow Up" width={isMobile ? 30 : ""} />
              <BrowserView>
                <div className={"d-flex p-3"}>
                  <div>
                    <b>{t("roadMap.20212stSemester")}</b>
                    <div>{t("roadMap.validation")}</div>
                  </div>
                </div>
              </BrowserView>
            </div>
          </Col>
          <Col xs={10} md={8} className={styles.roadMapDescriptionText}>
            <MobileView>
              <b>{t("roadMap.20212stSemester")}</b>
              <div>{t("roadMap.validation")}</div>
            </MobileView>
            <div>{t("roadMap.validationDescription")}</div>
            <div className={styles.barProgress}>
              <BarProgress perCent={10000} width={isMobile ? 280 : 550} />
            </div>
            <div className={styles.statusProgress}>
              <div>{t("roadMap.progress")}</div>
              <div>100%</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={4} className={styles.roadMapLine}>
            <div className={styles.roadMapDescription}>
              <Image src={ArrowUp} alt="Arrow Up" width={isMobile ? 30 : ""} />
              <BrowserView>
                <div className={"d-flex p-3"}>
                  <div>
                    <b>{t("roadMap.20221ndSemester")}</b>
                    <div>{t("roadMap.mvpLaunch")}</div>
                  </div>
                </div>
              </BrowserView>
            </div>
          </Col>
          <Col xs={10} md={8} className={styles.roadMapDescriptionText}>
            <MobileView>
              <b>{t("roadMap.20221ndSemester")}</b>
              <div>{t("roadMap.mvpLaunch")}</div>
            </MobileView>
            {t("roadMap.mvpLaunchDescription")}
            <div className={styles.barProgress}>
              <BarProgress perCent={200} width={isMobile ? 280 : 550} />
            </div>
            <div className={styles.statusProgress}>
              <div>{t("roadMap.progress")}</div>
              <div>20%</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={4} className={styles.roadMapLine}>
            <div className={styles.roadMapDescription}>
              <Image src={ArrowUp} alt="Arrow Up" width={isMobile ? 30 : ""} />
              <BrowserView>
                <div className={"d-flex p-3"}>
                  <div>
                    <b>{t("roadMap.20222ndSemester")}</b>
                    <div>{t("roadMap.pixIntegration")}</div>
                  </div>
                </div>
              </BrowserView>
            </div>
          </Col>
          <Col xs={10} md={8} className={styles.roadMapDescriptionText}>
            <MobileView>
              <b>{t("roadMap.20222ndSemester")}</b>
              <div>Iora Pay</div>
            </MobileView>
            {t("roadMap.ioraPayDescription")}
            <div className={styles.barProgress}>
              <BarProgress perCent={200} width={isMobile ? 280 : 550} />
            </div>
            <div className={styles.statusProgress}>
              <div>{t("roadMap.progress")}</div>
              <div>20%</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={4} className={styles.roadMapLine}>
            <div className={styles.roadMapDescription}>
              <Image src={ArrowUp} alt="Arrow Up" width={isMobile ? 30 : ""} />
              <BrowserView>
                <div className={"d-flex p-3"}>
                  <div>
                    <b>{t("roadMap.20231ndSemester")}</b>
                    <div>{t("roadMap.ethereumMainNet")}</div>
                  </div>
                </div>
              </BrowserView>
            </div>
          </Col>
          <Col xs={10} md={8} className={styles.roadMapDescriptionText}>
            <MobileView>
              <b>{t("roadMap.20231ndSemester")}</b>
              <div>{t("roadMap.ethereumMainNet")}</div>
            </MobileView>
            {t("roadMap.ioraPayEthereumMainNet")}
            <div className={styles.barProgress}>
              <BarProgress perCent={0} width={isMobile ? 280 : 550} />
            </div>
            <div className={styles.statusProgress}>
              <div>{t("roadMap.progress")}</div>
              <div>0%</div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Roadmap;
