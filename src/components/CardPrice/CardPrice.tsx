import styles from "./CardPrice.module.scss";
import { getCurrencyPrice, getCurrencySymbol } from "../../utils/getCurrency";
interface ICardPriceProps {
  currency: string;
  ticketPrice: number;
}

export const CardPrice = ({ currency, ticketPrice }: ICardPriceProps) => {
  const currencySymbol = getCurrencySymbol(currency);
  const currencyPrice = getCurrencyPrice(currency, ticketPrice);
  return (
    <div className={styles.cardPrice}>
      <button className={styles.cardPriceBtn}>
        <p>
          Купить <br /> за {currencyPrice} {currencySymbol}
        </p>
      </button>
    </div>
  );
};
