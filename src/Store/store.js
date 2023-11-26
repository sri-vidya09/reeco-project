import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/reducer";

const store = configureStore({
  reducer: {
    order: reducer,
  },
});

export default store;