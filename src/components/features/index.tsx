import Feature01 from "../../assets/imgs/list01.png";
import Feature02 from "../../assets/imgs/list02.png";
import Feature03 from "../../assets/imgs/list03.png";
import Feature04 from "../../assets/imgs/list04.png";
import { isMobile } from "react-device-detect";
import { Image } from "react-bootstrap";
import styles from "./style.module.scss";

const Features = () => {
  return (
    <div id={styles.Features}>
      <div className={styles.title}>Features</div>
      <div className={styles.listSection}>
        <div className={styles.listRow}>
          <Image
            height={isMobile ? 100 : 200}
            src={Feature01}
            alt=" ETHEREUM CLIQUE UPGRADED FORK"
          />
          <div className={styles.listFeatures}>
            <div className={styles.featuresTitle}>
              ETHEREUM CLIQUE UPGRADED FORK
            </div>
            <div className={styles.featuresSubTitle}>
              Our development team are developing new features to adapt our
              Latin american market. Fast and safe protocols.
            </div>
          </div>
        </div>
        <div className={styles.listRow}>
          <div className={styles.listFeatures}>
            <div className={styles.featuresTitle}>BUILDING IN SOLIDITY</div>
            <div className={styles.featuresSubTitle}>
              We will support all smart contracts from Ethereum/Binance Smart
              Chain
            </div>
          </div>
          <Image
            height={isMobile ? 100 : 200}
            src={Feature02}
            alt="BUILDING IN SOLIDITY"
          />
        </div>
        <div className={styles.listRow}>
          <Image
            height={isMobile ? 100 : 200}
            src={Feature03}
            alt="LOOKING FOR CBDC INTEGRATIONS"
          />
          <div className={styles.listFeatures}>
            <div className={styles.featuresTitle}>
              LOOKING FOR CBDC INTEGRATIONS
            </div>
            <div className={styles.featuresSubTitle}>
              IoraChain have been created to Latam market. All features is
              focused on latin demand and also integrated for the CBDC.
            </div>
          </div>
        </div>
        <div className={styles.listRow}>
          <div className={styles.listFeatures}>
            <div className={styles.featuresTitle}>
              NFT&apos;s, LIVESTREAMING and METAVERSES
            </div>
            <div className={styles.featuresSubTitle}>
              Iora chain has started a MVP process called IoraPay. Fast payment
              system integrated from PIX (Brazillian system payment)
            </div>
          </div>
          <Image
            height={isMobile ? 100 : 200}
            src={Feature04}
            alt="   NFT's, LIVESTREAMING and METAVERSES"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
