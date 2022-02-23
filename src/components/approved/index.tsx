import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import CashIn from "../../assets/imgs/cashin.svg";
import { Image } from "react-bootstrap";
import Button from "@mui/material/Button";
import GoogleForm from "../../assets/imgs/googleForm.svg";

const Waiting = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id={styles.Waiting}>
        <Image height={300} src={CashIn} alt="Process Approved" />
        <div className={styles.columnItems}>
          <div className={styles.title}>{t("dialog.successfulPayment")}</div>
          <div className={styles.subtitle}>{t("dialog.filLGoogleForm")}</div>
        </div>
        <div className={styles.areaButton}>
          <Button
            variant="contained"
            size="large"
            href="https://forms.gle/ErD6n5i9YuQ6m3JC6"
            target="_blank"
            startIcon={
              <Image height={30} src={GoogleForm} alt={t("dialog.fillForm")} />
            }
            className={styles.actionButton}
          >
            {t("dialog.fillForm")}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Waiting;
