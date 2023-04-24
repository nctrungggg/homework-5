import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "../modules/table/redux/tableSlice";

const rootReducer = {
  table: tableSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
