import styles from "./style.module.scss";
import { Outlet } from "react-router";

const Dialog = () => {
  return (
    <section id={styles.Dialog}>
      <Outlet />
    </section>
  );
};

export default Dialog;
