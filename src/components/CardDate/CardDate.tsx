import { formatDate } from "../../utils/formatDate";
import styles from "./CardDate.module.scss";

interface ICardDateProps {
  departureDate: string;
  arrivalDate: string;
}
export const CardDate = ({ departureDate, arrivalDate }: ICardDateProps) => {
  const formattedDepartureDate = formatDate(departureDate);
  const formattedArrivalDate = formatDate(arrivalDate);
  return (
    <div className={styles.cardDate}>
      <div className={styles.departureDate}>{formattedDepartureDate}</div>
      <div className={styles.arrivalDate}>{formattedArrivalDate}</div>
    </div>
  );
};
