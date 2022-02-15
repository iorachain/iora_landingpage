import styles from "./style.module.scss";
import { Image, Col, Row } from "react-bootstrap";
import IoraChain from "../../assets/imgs/iorachainList.png";
import Praora from "../../assets/imgs/praora.svg";
import Line from "../../assets/imgs/line.svg";
import Caldeus from "../../assets/imgs/caldeus.svg";
import IoraPay from "../../assets/imgs/iorapay.svg";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();

  return (
    <section id="ProductsSection">
      <div id={styles.Products}>
        <Image height={isMobile ? 150 : 300} src={IoraChain} alt="Iora Chain" />
        <div className={styles.productContainer}>
          <div className={styles.productTitles}>
            <span className={styles.productTitle}>IoraChain</span>
            <Image width={30} src={Line} alt="" />
            <span className={styles.productSubTitle}>
              {t("dapps.ioraChainTitle")}
            </span>
          </div>
          <div>
            <span className={styles.productDescription}>
              {t("dapps.ioraChainDescription")}
            </span>
          </div>
          <Row className={styles.productColumns}>
            <Col>
              <div>{t("dapps.developmentProcess")}</div>
              <div className={styles.productColumnSubTitle}>
                {t("status.planning")}
              </div>
            </Col>
            <Col>
              <div>{t("dapps.totalRaised")}</div>
              <div className={styles.productColumnSubTitle}>$ 0,00</div>
            </Col>
            <Col>
              <div>{t("dapps.mainGoal")}</div>
              <div className={styles.productColumnSubTitle}>$ 500.000</div>
            </Col>
          </Row>
        </div>
      </div>
      <div id={styles.Products}>
        <div className={styles.productContainer}>
          <div className={styles.productTitles}>
            <span className={styles.productTitle}>Praora</span>
            <Image width={30} src={Line} alt="" />
            <span className={styles.productSubTitle}>
              {t("dapps.praoraTitle")}
            </span>
          </div>
          <div>
            <span className={styles.productDescription}>
              {t("dapps.praoraDescription")}
            </span>
          </div>
          <Row className={styles.productColumns}>
            <Col>
              <div>{t("dapps.developmentProcess")}</div>
              <div className={styles.productColumnSubTitle}>
                {t("status.stage1")}
              </div>
            </Col>
            <Col>
              <div>{t("dapps.totalRaised")}</div>
              <div className={styles.productColumnSubTitle}>$ 28,110,63</div>
            </Col>
            <Col>
              <div>{t("dapps.mainGoal")}</div>
              <div className={styles.productColumnSubTitle}>$ 300.000</div>
            </Col>
          </Row>
        </div>
        <Image height={isMobile ? 150 : 300} src={Praora} alt="Praora" />
      </div>
      <div id={styles.Products}>
        <Image height={isMobile ? 150 : 300} src={Caldeus} alt="Caldeus" />
        <div className={styles.productContainer}>
          <div className={styles.productTitles}>
            <span className={styles.productTitle}>CALDEUS</span>
            <Image width={30} src={Line} alt="" />
            <span className={styles.productSubTitle}>
              {t("dapps.caldeusTitle")}
            </span>
          </div>
          <div>
            <span className={styles.productDescription}>
              {t("dapps.caldeusDescription")}
            </span>
          </div>
          <Row className={styles.productColumns}>
            <Col>
              <div>{t("dapps.developmentProcess")}</div>
              <div className={styles.productColumnSubTitle}>PLANNING</div>
            </Col>
            <Col>
              <div>{t("dapps.totalRaised")}</div>
              <div className={styles.productColumnSubTitle}>$ 0,00</div>
            </Col>
            <Col>
              <div>{t("dapps.mainGoal")}</div>
              <div className={styles.productColumnSubTitle}>$ 250.000</div>
            </Col>
          </Row>
        </div>
      </div>
      <div id={styles.Products}>
        <div className={styles.productContainer}>
          <div className={styles.productTitles}>
            <span className={styles.productTitle}>IoraPay</span>
            <Image width={30} src={Line} alt="" />
            <span className={styles.productSubTitle}>
              {t("dapps.ioraPayTitle")}
            </span>
          </div>
          <div>
            <span className={styles.productDescription}>
              {t("dapps.ioraPayDescription")}
            </span>
          </div>
          <Row className={styles.productColumns}>
            <Col>
              <div>{t("dapps.developmentProcess")}</div>
              <div className={styles.productColumnSubTitle}>STAGE 1</div>
            </Col>
            <Col>
              <div>{t("dapps.totalRaised")}</div>
              <div className={styles.productColumnSubTitle}>$ 530</div>
            </Col>
            <Col>
              <div>{t("dapps.mainGoal")}</div>
              <div className={styles.productColumnSubTitle}>$ 200.000</div>
            </Col>
          </Row>
        </div>
        <Image height={isMobile ? 150 : 300} src={IoraPay} alt="IoraPay" />
      </div>
    </section>
  );
};

export default Products;
