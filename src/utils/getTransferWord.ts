export const getTransfersWord = (number: number) => {
  if (number === 0) {
    return "Пересадок";
  } else if (number === 1) {
    return "Пересадка";
  } else if (number >= 2 && number <= 4) {
    return "Пересадки";
  } else {
    return "Пересадок";
  }
};

