import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import Astronault from "../../assets/imgs/astronault.svg";
import { Image } from "react-bootstrap";
import Button from "@mui/material/Button";
import Discord from "../../assets/imgs/discord.svg";

const Waiting = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id={styles.Waiting}>
        <Image height={300} src={Astronault} alt="Waiting Process" />
        <div className={styles.columnItems}>
          <div className={styles.title}>{t("dialog.paymentProcess")}</div>
          <div className={styles.subtitle}>{t("dialog.joinDiscord")}</div>
        </div>
        <div className={styles.areaButton}>
          <Button
            variant="contained"
            size="large"
            href="https://discord.gg/9pCfzNwVRU"
            target="_blank"
            startIcon={
              <Image height={30} src={Discord} alt="Enjoy our Discord" />
            }
            className={styles.actionButton}
          >
            {t("dialog.discord")}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Waiting;
