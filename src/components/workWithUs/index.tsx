import styles from "./style.module.scss";
import { Col, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import HireTeam from "../../assets/imgs/hire.svg";
import Button from "@mui/material/Button";

const WorkWithUs = () => {
  return (
    <section id={styles.WorkWithUs}>
      <div className={styles.titleWorkWithUs}>Enjoy our team</div>
      <Row>
        <Col>
          <Image height={400} src={HireTeam} alt="Enjoy our team" />
        </Col>
        <Col className={styles.sectionWorkWithUs}>
          <div className={styles.subTitleWorkWithUs}>
            START WORKING WITH OUR COMPANY AND PRODUCTS
          </div>
          <div className={styles.getStartedButton}>
            <Button
              variant="contained"
              size="large"
              className={styles.explorerButton}
            >
              GET STARTED
            </Button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default WorkWithUs;
