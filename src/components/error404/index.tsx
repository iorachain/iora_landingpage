import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import Astronault from "../../assets/imgs/astronault.svg";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id={styles.Error404}>
        <Link to="/">
          <Image height={300} src={Astronault} alt="Waiting Process" />
        </Link>
        <div className={styles.columnItems}>
          <div className={styles.title}>Error 404</div>
          <div className={styles.subtitle}>Page Not Found</div>
        </div>
      </div>
    </>
  );
};

export default Error404;
