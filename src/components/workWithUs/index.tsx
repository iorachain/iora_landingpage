import styles from "./style.module.scss";
import { Col, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import HireTeam from "../../assets/imgs/hire.svg";
import Button from "@mui/material/Button";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

const WorkWithUs = () => {
  const { t } = useTranslation();

  return (
    <section id={styles.WorkWithUs}>
      <div className={styles.titleWorkWithUs}>
        {t("workingWIthUs.enjoyOurTeam")}
      </div>
      <Row>
        <Col>
          <div className={styles.figureHireTeam}>
            <Image
              width={isMobile ? 300 : 400}
              src={HireTeam}
              alt={t("workingWIthUs.enjoyOurTeam")}
            />
          </div>
        </Col>
        <Col className={styles.sectionWorkWithUs}>
          <div className={styles.subTitleWorkWithUs}>
            {t("workingWIthUs.getStartedWorkingTogether")}
          </div>
          <div className={styles.getStartedButton}>
            <Button
              variant="contained"
              size="large"
              className={styles.explorerButton}
            >
              {t("workingWIthUs.getStarted")}
            </Button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default WorkWithUs;
