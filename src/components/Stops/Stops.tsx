import { useDispatch, useSelector } from "react-redux";
import { MouseEvent as ReactMouseEvent } from "react";
import styles from "./Stops.module.scss";
import { RootState } from "../../redux/store";
import { setStops } from "../../redux/StopsSlice/StopsSlice";

interface StopOption {
  label: string;
  value: string;
}

const stopsOptions: StopOption[] = [
  { label: "Все", value: "all" },
  { label: "Без пересадок", value: "0" },
  { label: "1 пересадка", value: "1" },
  { label: "2 пересадки", value: "2" },
  { label: "3 пересадки", value: "3" },
];

export const Stops = () => {
  const stops = useSelector((state: RootState) => state.stopsSlice.stops);
  const dispatch = useDispatch();

  const stopsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    let newStops = [...stops];

    if (value === "all") {
      if (checked) {
        newStops = ["all"];
      } else {
        newStops = [];
      }
    } else {
      if (checked) {
        newStops.push(value);
        newStops = newStops.filter((stop) => stop !== "all");
      } else {
        newStops = newStops.filter((stop) => stop !== value);
      }

      if (newStops.length === 0) {
        newStops = ["all"];
      }
    }

    dispatch(setStops(newStops));
  };
  const handleClick = (event: ReactMouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const labelText = target.closest("label");
    const checkbox = labelText?.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement | null;

    if (checkbox && labelText?.contains(target)) {
      const value = checkbox.value;

      if (value === "all") {
        dispatch(setStops(["all"]));
      } else {
        dispatch(setStops([value.toString()]));
      }
    }
  };
  return (
    <div className={styles.stops}>
      <h3 className={styles.stopsTitle}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
      <div className={styles.radioCheckboxes}>
        {stopsOptions.map((option) => (
          <label key={option.value} className={styles.label}>
            <input
              type="checkbox"
              value={option.value}
              checked={stops.includes(option.value)}
              onChange={stopsChange}
              className={styles.checkbox}
            />
            <span>{option.label}</span>
            <span className={styles.pseudoElement} onClick={handleClick}>
              ТОЛЬКО
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
