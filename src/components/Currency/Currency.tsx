import { Radio, RadioChangeEvent } from "antd";

import { setCurrency } from "../../redux/CurrencySlice/CurrencySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import styles from "./Currency.module.scss";

export const Currency = () => {
  const currencyOptions = ["RUB", "USD", "EUR"];
  const dispatch = useDispatch();
  const currency = useSelector(
    (state: RootState) => state.currencySlice.currency
  );

  const currencyChange = ({ target: { value } }: RadioChangeEvent) => {
    dispatch(setCurrency(value));
  };
  return (
    <div className={styles.currency}>
      <h3 className={styles.currencyTitle}>ВАЛЮТА</h3>
      <Radio.Group
        options={currencyOptions}
        onChange={currencyChange}
        value={currency}
        optionType="button"
        buttonStyle="solid"
        className={styles.radioGroup}
        size="large"
      />
      <br />
    </div>
  );
};
