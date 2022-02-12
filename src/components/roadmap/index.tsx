import styles from "./style.module.scss";
import { Row, Col, Image } from "react-bootstrap";
import ArrowUp from "../../assets/imgs/arrowUp.svg";
import CompleteBar from "../../assets/imgs/completeBar.svg";
import HalfCompleteBar from "../../assets/imgs/halfcompleteBar.svg";

const Roadmap = () => {
  return (
    <section id={styles.Roadmap}>
      <div className={styles.titleRoadMap}>Roadmap</div>
      <div className={styles.sectionRoadMap}>
        <Row>
          <Col md={4} className={styles.roadMapLine}>
            <div className={styles.roadMapDescription}>
              <Image src={ArrowUp} alt="Arrow Up" />
              <div className={"d-flex p-3"}>
                <div>
                  <b>2021 - 1st Semester</b>
                  <div>Research</div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={8} className={styles.roadMapDescriptionText}>
            Market studies and adaptations of the model for contracting service
            providers to smart contracts.
            <Image src={CompleteBar} alt="Complete bar" />
            <div className={styles.statusProgress}>
              <div>Progress</div>
              <div>100%</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} className={styles.roadMapLine}>
            <div className={styles.roadMapDescription}>
              <Image src={ArrowUp} alt="Arrow Up" />
              <div className={"d-flex p-3"}>
                <div>
                  <b>2021 - 1st Semester</b>
                  <div>Investments and hires</div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={8} className={styles.roadMapDescriptionText}>
            Through personal private investment, materials and team were hired
            for studies and development of user experience, as well as the
            development of the Praora MVP.
            <Image src={CompleteBar} alt="Complete bar" />
            <div className={styles.statusProgress}>
              <div>Progress</div>
              <div>100%</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} className={styles.roadMapLine}>
            <div className={styles.roadMapDescription}>
              <Image src={ArrowUp} alt="Arrow Up" />
              <div className={"d-flex p-3"}>
                <div>
                  <b>2021 - 2nd Semester</b>
                  <div>Validation</div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={8} className={styles.roadMapDescriptionText}>
            First user experience tests, market research, beta user feedback
            were carried out.
            <Image src={CompleteBar} alt="Complete bar" />
            <div className={styles.statusProgress}>
              <div>Progress</div>
              <div>100%</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} className={styles.roadMapLine}>
            <div className={styles.roadMapDescription}>
              <Image src={ArrowUp} alt="Arrow Up" />
              <div className={"d-flex p-3"}>
                <div>
                  <b>2022 - April</b>
                  <div>MVP Launch</div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={8} className={styles.roadMapDescriptionText}>
            Will be the launch of Praora MVP with multi-chain trades, login with
            MetaMask or Wallet Connect.
            <Image src={HalfCompleteBar} alt="Bar" />
            <div className={styles.statusProgress}>
              <div>Progress</div>
              <div>60%</div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Roadmap;
