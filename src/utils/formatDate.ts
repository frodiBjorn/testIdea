export const formatDate = (dateString: string) => {
  const [day, month, year] = dateString.split(".");
  const date = new Date(`20${year}-${month}-${day}`);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "short",
  };
  const formattedDate = date.toLocaleDateString("ru-RU", options);
  return `${formattedDate.slice(3, -3)}, ${formattedDate.slice(0, 2)}`;
};
