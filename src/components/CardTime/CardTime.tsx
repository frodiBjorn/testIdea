import { getTransfersWord } from "../../utils/getTransferWord";

import stopsImage from "../../assets/images/stops.png";

import styles from "./CardTime.module.scss";

interface ICardTimeProps {
  stops: number;
  departureTime: string;
  arrivalTime: string;
}

export const CardTime = ({
  stops,
  departureTime,
  arrivalTime,
}: ICardTimeProps) => {
  return (
    <div className={styles.cardTime}>
      <div className={styles.departureTime}>
        <p>{departureTime}</p>
      </div>
      <div className={styles.stops}>
        <p>
          {stops} {getTransfersWord(stops)}
        </p>
        <div className={styles.stopsImage}>
          <div className={styles.stopsLine}></div>
          <img src={stopsImage} alt="stopsImage" />
        </div>
      </div>
      <div className={styles.arrivalTime}>
        <p>{arrivalTime}</p>
      </div>
    </div>
  );
};
