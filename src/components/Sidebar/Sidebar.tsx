import { Currency } from "../Currency/Currency";
import { Stops } from "../Stops/Stops";

import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Currency />
      <Stops />
    </div>
  );
};
