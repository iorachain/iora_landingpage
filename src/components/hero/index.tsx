import Latam from "../../assets/imgs/latam.svg";
import SubHero from "../../assets/imgs/subHero.svg";
import { Image } from "react-bootstrap";
import styles from "./styles.module.scss";
import Button from "@mui/material/Button";

const Hero = () => {
  return (
    <>
      <div id={styles.Hero}>
        <div className={styles.callToAction}>
          <div className={styles.title}>Welcome Web 3.0</div>
          <div className={styles.subtitle}>
            First blockchain from LATAM.
            <br />
            Welcome home
          </div>
          <div className={styles.buttonArea}>
            <Button
              variant="contained"
              size="large"
              className={styles.actionButton}
            >
              IORA TOKEN
            </Button>
            <Button
              variant="contained"
              size="large"
              className={styles.explorerButton}
            >
              Explorer
            </Button>
          </div>
        </div>
        <div className={styles.latamImage}>
          <Image height={500} src={Latam} alt="Latam" />
        </div>
      </div>
      <div className={styles.subFooter}>
        <Image height={90} src={SubHero} />
      </div>
    </>
  );
};

export default Hero;
