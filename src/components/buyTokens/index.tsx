import styles from "./style.module.scss";
import Button from "@mui/material/Button";
import { Image } from "react-bootstrap";
import GoogleForm from "../../assets/imgs/googleForm.svg";
import { useTranslation } from "react-i18next";
import BuyTokensImage from "../../assets/imgs/buyTokens.svg";
import { isMobile } from "react-device-detect";

const BuyTokens = () => {
  const { t } = useTranslation();

  return (
    <section id={styles.BuyTokens}>
      <h1 className={styles.titleTokens}>{t("buyTokens.buyIora")}</h1>
      <div className={styles.tokenColumn}>
        <div className={styles.descriptionTokens}>
          <div className={styles.descriptionTokenColumn}>
            <div className={styles.subtitleTokens}>
              {t("buyTokens.preSaleFunding")}
            </div>
            <div className={styles.infoTokens}>
              {t("buyTokens.areYou")}
              <br />
              {t("buyTokens.bePart")}
            </div>
          </div>
          <Button
            variant="contained"
            size="large"
            href="https://forms.gle/ErD6n5i9YuQ6m3JC6"
            id="gtm_button_click"
            target="_blank"
            startIcon={
              <Image height={50} src={GoogleForm} alt={t("dialog.fillForm")} />
            }
            className={styles.actionButton}
          >
            {t("dialog.fillForm")}
          </Button>
        </div>
        <div className={styles.buyTokensImage}>
          <Image
            src={BuyTokensImage}
            alt="Buy Tokens"
            width={isMobile ? 200 : 350}
          />
        </div>
      </div>
    </section>
  );
};

export default BuyTokens;
