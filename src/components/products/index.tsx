import styles from "./style.module.scss";
import { Image, Col, Row } from "react-bootstrap";
import IoraChain from "../../assets/imgs/iorachainList.png";
import Praora from "../../assets/imgs/praora.svg";
import Line from "../../assets/imgs/line.svg";
import Caldeus from "../../assets/imgs/caldeus.svg";
import IoraPay from "../../assets/imgs/iorapay.svg";
import { isMobile } from "react-device-detect";

const Products = () => {
  return (
    <>
      <div id={styles.Products}>
        <Image height={isMobile ? 150 : 300} src={IoraChain} alt="Iora Chain" />
        <div className={styles.productContainer}>
          <div className={styles.productTitles}>
            <span className={styles.productTitle}>IoraChain</span>
            <Image width={30} src={Line} alt="" />
            <span className={styles.productSubTitle}>
              Blockchain for Latin Americans
            </span>
          </div>
          <div>
            <span className={styles.productDescription}>
              Growing with fast and safe solutions. We created a Blockchain on
              open source code, on LATAM market demand. Full integration with
              FIAT/Crypto exchanges and creating every single day a new
              environment to make Latam users life better.
            </span>
          </div>
          <Row className={styles.productColumns}>
            <Col>
              <div>DEVELOPMENT PROCESS</div>
              <div className={styles.productColumnSubTitle}>PLANNING</div>
            </Col>
            <Col>
              <div>TOTAL RAISED</div>
              <div className={styles.productColumnSubTitle}>$ 0,00</div>
            </Col>
            <Col>
              <div>MAIN GOAL</div>
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
            <span className={styles.productSubTitle}>Streaming Plataform</span>
          </div>
          <div>
            <span className={styles.productDescription}>
              Praora is a <b>Streaming Plataform</b> which unifies all the
              resources you need to manage your lives and keep track of your
              cryptocurrencies earnings as a content producer. You can easily
              start streaming, create sweepstakes for your followers and sell
              digital products. <b>All in one place!</b>
            </span>
          </div>
          <Row className={styles.productColumns}>
            <Col>
              <div>DEVELOPMENT PROCESS</div>
              <div className={styles.productColumnSubTitle}>STAGE 1</div>
            </Col>
            <Col>
              <div>TOTAL RAISED</div>
              <div className={styles.productColumnSubTitle}>$ 28,110,63</div>
            </Col>
            <Col>
              <div>MAIN GOAL</div>
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
            <span className={styles.productSubTitle}>NFT Marketplace</span>
          </div>
          <div>
            <span className={styles.productDescription}>
              Caldeus is an NFT marketplace for videos, photos, images
              collection arts. We built a space for visual artists from LATAM
              under blockchain technology.
            </span>
          </div>
          <Row className={styles.productColumns}>
            <Col>
              <div>DEVELOPMENT PROCESS</div>
              <div className={styles.productColumnSubTitle}>PLANNING</div>
            </Col>
            <Col>
              <div>TOTAL RAISED</div>
              <div className={styles.productColumnSubTitle}>$ 0,00</div>
            </Col>
            <Col>
              <div>MAIN GOAL</div>
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
              Self-custody payment system
            </span>
          </div>
          <div>
            <span className={styles.productDescription}>
              IoraPay é um sistema de pagamento integrado ao PIX que possui a
              funcionalidade de realizar pagamentos integrado a uma wallet
              terceira, como Metamask e Truswallet. Com o IoraPay os usuários
              podem realizar transações rápidas e simples diretamente para sua
              carteira Metamask, sem passar por uma exchange centralizada.
            </span>
          </div>
          <Row className={styles.productColumns}>
            <Col>
              <div>DEVELOPMENT PROCESS</div>
              <div className={styles.productColumnSubTitle}>STAGE 1</div>
            </Col>
            <Col>
              <div>TOTAL RAISED</div>
              <div className={styles.productColumnSubTitle}>$ 530</div>
            </Col>
            <Col>
              <div>MAIN GOAL</div>
              <div className={styles.productColumnSubTitle}>$ 200.000</div>
            </Col>
          </Row>
        </div>
        <Image height={isMobile ? 150 : 300} src={IoraPay} alt="IoraPay" />
      </div>
    </>
  );
};

export default Products;
