export const getCurrencySymbol = (currency: string) => {
  switch (currency) {
    case "RUB":
      return "₽";
    case "USD":
      return "$";
    case "EUR":
      return "€";
    default:
      return "";
  }
};
export const getCurrencyPrice = (currency: string, price: number) => {
  switch (currency) {
    case "RUB":
      return price;
    case "USD":
      return (price / 93.17).toFixed();
    case "EUR":
      return (price / 98.85).toFixed();
    default:
      return "";
  }
};
