import Latam from "../../assets/imgs/latam.svg";
import SubHero from "../../assets/imgs/subHero.svg";
import { Image } from "react-bootstrap";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";
import { BrowserView, isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id={styles.Hero}>
        <div className={styles.callToAction}>
          <div className={styles.title}>{t("hero.welcome")}</div>
          <div className={styles.subtitle}>
            {t("hero.firstLatam")}
            <br />
            {t("hero.welcomeHome")}
          </div>
          <div className={styles.buttonArea}>
            <Button
              variant="contained"
              size="large"
              id="gtm_button_click"
              className={styles.actionButton}
              href="https://forms.gle/ErD6n5i9YuQ6m3JC6"
            >
              {t("hero.buyIoraToken")}
            </Button>
            <Button
              variant="contained"
              size="large"
              className={styles.explorerButton}
              href="https://explorer.iorachain.com"
            >
              {t("hero.explorer")}
            </Button>
          </div>
        </div>
        <BrowserView>
          <div className={styles.latamImage}>
            <Image height={500} src={Latam} alt={t("hero.latam")} />
          </div>
        </BrowserView>
      </div>
      <div className={styles.subFooter}>
        <Image height={isMobile ? 60 : 90} src={SubHero} />
      </div>
    </>
  );
};

export default Hero;
