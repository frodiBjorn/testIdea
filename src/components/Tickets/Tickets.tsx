import * as ticketsData from "../../data/tickets.json";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import ITicket from "../../models/ITicket";

import { Ticket } from "../Ticket/Ticket";

import styles from "./Tickets.module.scss";

const tickets: ITicket[] = ticketsData.tickets;

export const Tickets = () => {
  const stops = useSelector((state: RootState) => state.stopsSlice.stops);
  const sortedTickets = tickets.sort((a, b) => a.price - b.price);
  const filteredTickets = sortedTickets.filter((ticket) => {
    if (stops.includes("all") || stops.length === 0) {
      return true;
    } else if (stops.includes(ticket.stops.toString())) {
      return true;
    }
    return false;
  });
  return (
    <div className={styles.cards}>
      {filteredTickets.map((ticket, index) => (
        <Ticket key={index} ticket={ticket} />
      ))}
    </div>
  );
};
