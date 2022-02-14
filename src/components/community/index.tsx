import Button from "@mui/material/Button";
import styles from "./styles.module.scss";
import Discord from "../../assets/imgs/discord.svg";
import Github from "../../assets/imgs/github.svg";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Community = () => {
  return (
    <div id={styles.Community}>
      <div className={styles.titleCommunity}>Community</div>
      <div>
        <span>For All</span>
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
      <div>
        <span>For Developers</span>
        <Button
          variant="contained"
          size="large"
          href="https://github.com/iorachain/iora_landingpage"
          target="_blank"
          className={styles.explorerButton}
          startIcon={<Image height={30} src={Github} alt="Enjoy our Github" />}
        >
          Github
        </Button>
      </div>
    </div>
  );
};

export default Community;
