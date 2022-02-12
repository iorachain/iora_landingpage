import styles from "./style.module.scss";
import { Row, Col, Image } from "react-bootstrap";
import ArrowUp from "../../assets/imgs/arrowUp.svg";
import ArrowLine from "../../assets/imgs/arrowLine.svg";
import BarProgress from "../UI/barProgress";
import { isMobile, BrowserView, MobileView } from "react-device-detect";

const Roadmap = () => {
  return (
    <section id={styles.Roadmap}>
      <div className={styles.sectionRoadMap}>
        <div className={styles.titleRoadMap}>Roadmap</div>
        <Row className={styles.titleRow}>
          <Col xs={2} md={4} className={styles.roadMapLine}>
            <div className={styles.roadMapDescription}>
              <Image src={ArrowUp} alt="Arrow Up" width={isMobile && 30} />
              <BrowserView>
                <div className={"d-flex p-3"}>
                  <div>
                    <b>2021 - 1st Semester</b>
                    <div>Research</div>
                  </div>
                </div>
              </BrowserView>
            </div>
          </Col>
          <Col xs={10} md={8} className={styles.roadMapDescriptionText}>
            <MobileView>
              <b>2021 - 1st Semester</b>
              <div>Research</div>
            </MobileView>
            Market studies and adaptations of the model for contracting service
            providers to smart contracts.
            <div className={styles.barProgress}>
              <BarProgress perCent={10000} width={isMobile ? 280 : 550} />
            </div>
            <div className={styles.statusProgress}>
              <div>Progress</div>
              <div>100%</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={4} className={styles.roadMapLine}>
            <div className={styles.roadMapDescription}>
              <Image src={ArrowUp} alt="Arrow Up" width={isMobile && 30} />
              <BrowserView>
                <div className={"d-flex p-3"}>
                  <div>
                    <b>2021 - 1st Semester</b>
                    <div>Investments and hires</div>
                  </div>
                </div>
              </BrowserView>
            </div>
          </Col>
          <Col xs={10} md={8} className={styles.roadMapDescriptionText}>
            <MobileView>
              <b>2021 - 1st Semester</b>
              <div>Investments and hires</div>
            </MobileView>
            Through personal private investment, materials and team were hired
            for studies and development of user experience, as well as the
            development of the Praora MVP.
            <div className={styles.barProgress}>
              <BarProgress perCent={10000} width={isMobile ? 280 : 550} />
            </div>
            <div className={styles.statusProgress}>
              <div>Progress</div>
              <div>100%</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={4} className={styles.roadMapLine}>
            <div className={styles.roadMapDescription}>
              <Image src={ArrowUp} alt="Arrow Up" width={isMobile && 30} />
              <BrowserView>
                <div className={"d-flex p-3"}>
                  <div>
                    <b>2021 - 2nd Semester</b>
                    <div>Validation</div>
                  </div>
                </div>
              </BrowserView>
            </div>
          </Col>
          <Col xs={10} md={8} className={styles.roadMapDescriptionText}>
            <MobileView>
              <b>2021 - 2nd Semester</b>
              <div>Validation</div>
            </MobileView>
            First user experience tests, market research, beta user feedback
            were carried out.
            <div className={styles.barProgress}>
              <BarProgress perCent={10000} width={isMobile ? 280 : 550} />
            </div>
            <div className={styles.statusProgress}>
              <div>Progress</div>
              <div>100%</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={4} className={styles.roadMapLine}>
            <div className={styles.roadMapDescription}>
              <Image src={ArrowUp} alt="Arrow Up" width={isMobile && 30} />
              <BrowserView>
                <div className={"d-flex p-3"}>
                  <div>
                    <b>2022 - April</b>
                    <div>MVP Launch</div>
                  </div>
                </div>
              </BrowserView>
            </div>
          </Col>
          <Col xs={10} md={8} className={styles.roadMapDescriptionText}>
            <MobileView>
              <b>2022 - April</b>
              <div>MVP Launch</div>
            </MobileView>
            Will be the launch of Praora MVP with multi-chain trades, login with
            MetaMask or Wallet Connect.
            <div className={styles.barProgress}>
              <BarProgress perCent={10000} width={isMobile ? 280 : 550} />
            </div>
            <div className={styles.statusProgress}>
              <div>Progress</div>
              <div>100%</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={4} className={styles.roadMapLine}>
            <div className={styles.roadMapDescription}>
              <Image src={ArrowUp} alt="Arrow Up" width={isMobile && 30} />
              <BrowserView>
                <div className={"d-flex p-3"}>
                  <div>
                    <b>2022 - May</b>
                    <div>New feature</div>
                  </div>
                </div>
              </BrowserView>
            </div>
          </Col>
          <Col xs={10} md={8} className={styles.roadMapDescriptionText}>
            <MobileView>
              <b>2022 - May</b>
              <div>New feature</div>
            </MobileView>
            Praora Wallet will be launched, with Login authentication via QR
            CODE, as well as encrypted live chat integrated into the system.
            <div className={styles.barProgress}>
              <BarProgress perCent={10000} width={isMobile ? 280 : 550} />
            </div>
            <div className={styles.statusProgress}>
              <div>Progress</div>
              <div>100%</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={4} className={styles.roadMapLine}>
            <div className={styles.roadMapDescription}>
              <Image src={ArrowUp} alt="Arrow Up" width={isMobile && 30} />
              <BrowserView>
                <div className={"d-flex p-3"}>
                  <div>
                    <b>2022 - Nov</b>
                    <div>Mobile Launch</div>
                  </div>
                </div>
              </BrowserView>
            </div>
          </Col>
          <Col xs={10} md={8} className={styles.roadMapDescriptionText}>
            <MobileView>
              <b>2022 - Nov</b>
              <div>Mobile Launch</div>
            </MobileView>
            Will be the launch of the mobile platform to integrate the live and
            meetings service to the system.
            <div className={styles.barProgress}>
              <BarProgress perCent={10000} width={isMobile ? 280 : 550} />
            </div>
            <div className={styles.statusProgress}>
              <div>Progress</div>
              <div>100%</div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Roadmap;
