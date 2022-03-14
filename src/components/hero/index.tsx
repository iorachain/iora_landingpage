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
              href="https://pancakeswap.finance/swap?outputCurrency=0xB70E1255446822E3B8dfe2d2c11fa1c9cb4a9c53"
            >
              {t("hero.buyIoraToken")}
            </Button>
            <Button
              variant="contained"
              size="large"
              className={styles.explorerButton}
              href="https://bscscan.com/token/0xb70e1255446822e3b8dfe2d2c11fa1c9cb4a9c53"
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
