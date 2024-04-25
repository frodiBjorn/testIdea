import styles from "./CardDestination.module.scss";

interface ICardDestinationProps {
  origin: string;
  originName: string;
  destinationName: string;
  destination: string;
}
export const CardDestination = ({
  origin,
  originName,
  destinationName,
  destination,
}: ICardDestinationProps) => {
  return (
    <div className={styles.cardDestination}>
      <div className={styles.departureDestination}>
        {origin}, {originName}
      </div>
      <div className={styles.arrivalDestination}>
        {destinationName}, {destination}
      </div>
    </div>
  );
};
