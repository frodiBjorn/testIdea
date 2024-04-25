import ITicket from "../../models/ITicket";

import { useSelector } from "react-redux";

import companyLogo from "../../assets/images/turkishAirlines.png";

import { RootState } from "../../redux/store";
import { CardPrice } from "../CardPrice/CardPrice";
import { CardTime } from "../CardTime/CardTime";

import styles from "./Ticket.module.scss";
import { CardDestination } from "../CardDestination/CardDestination";
import { CardDate } from "../CardDate/CardDate";

interface TicketProps {
  ticket: ITicket;
}

export const Ticket = ({ ticket }: TicketProps) => {
  const currency = useSelector(
    (state: RootState) => state.currencySlice.currency
  );

  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <div className={styles.cardImage}>
          <img src={companyLogo} alt="companyLogo" />
        </div>
        <CardPrice currency={currency} ticketPrice={ticket.price} />
      </div>
      <div className={styles.cardRight}>
        <CardTime
          stops={ticket.stops}
          departureTime={ticket.departure_time}
          arrivalTime={ticket.arrival_time}
        />
        <CardDestination
          origin={ticket.origin}
          originName={ticket.origin_name}
          destinationName={ticket.destination_name}
          destination={ticket.destination}
        />
        <CardDate
          departureDate={ticket.departure_date}
          arrivalDate={ticket.arrival_date}
        />
      </div>
    </div>
  );
};
