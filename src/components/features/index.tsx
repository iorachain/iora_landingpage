import Feature01 from "../../assets/imgs/list01.png";
import Feature02 from "../../assets/imgs/list02.png";
import Feature03 from "../../assets/imgs/list03.png";
import Feature04 from "../../assets/imgs/list04.png";
import { isMobile } from "react-device-detect";
import { Image } from "react-bootstrap";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  return (
    <section id="FeaturesSection">
      <div id={styles.Features}>
        <h1 className={styles.title}>{t("header.features")}</h1>
        <div className={styles.listSection}>
          <div className={styles.listRow}>
            <Image
              height={isMobile ? 100 : 200}
              src={Feature01}
              alt={t("features.ethereumFork")}
            />
            <div className={styles.listFeatures}>
              <h2 className={styles.featuresTitle}>
                {t("features.ethereumFork")}
              </h2>
              <div className={styles.featuresSubTitle}>
                {t("features.ethereumForkDescription")}
              </div>
            </div>
          </div>
          <div className={styles.listRow}>
            <div className={styles.listFeatures}>
              <h2 className={styles.featuresTitle}>
                {t("features.ethereumBuiltInSolidy")}
              </h2>
              <div className={styles.featuresSubTitle}>
                {t("features.ethereumBuiltInSolidyDescription")}
              </div>
            </div>
            <Image
              height={isMobile ? 100 : 200}
              src={Feature02}
              alt={t("features.ethereumBuiltInSolidy")}
            />
          </div>
          <div className={styles.listRow}>
            <Image
              height={isMobile ? 100 : 200}
              src={Feature03}
              alt={t("features.CBDCIntegrations")}
            />
            <div className={styles.listFeatures}>
              <h2 className={styles.featuresTitle}>
                {t("features.CBDCIntegrations")}
              </h2>
              <div className={styles.featuresSubTitle}>
                {t("features.CBDCIntegrationsDescription")}
              </div>
            </div>
          </div>
          <div className={styles.listRow}>
            <div className={styles.listFeatures}>
              <h2 className={styles.featuresTitle}>
                {t("features.NFTMetaverses")}
              </h2>
              <div className={styles.featuresSubTitle}>
                {t("features.NFTMetaversesDescriptions")}
              </div>
            </div>
            <Image
              height={isMobile ? 100 : 200}
              src={Feature04}
              alt={t("features.NFTMetaverses")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
