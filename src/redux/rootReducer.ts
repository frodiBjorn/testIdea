import { combineReducers } from "@reduxjs/toolkit";
import CurrencySlice from "./CurrencySlice/CurrencySlice";
import StopsSlice from "./StopsSlice/StopsSlice";

const rootReducer = combineReducers({
  currencySlice: CurrencySlice,
  stopsSlice: StopsSlice,
});
export default rootReducer;
