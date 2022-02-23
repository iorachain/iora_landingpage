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
        <Image height={200} src={Astronault} alt="Waiting Process" />
        <div className={styles.columnItems}>
          <div className={styles.title}>Atenção</div>
          <div className={styles.subtitle}>
            Processando o pagamento <br />
            Entre no nosso Discord e informe sua wallet na Binance Smart Chain
            (BSC)
          </div>
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
            Discord
          </Button>
        </div>
      </div>
    </>
  );
};

export default Waiting;
