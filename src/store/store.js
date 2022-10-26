import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import employeeSlice from "../features/employee/employeeSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    employee: employeeSlice,
  },
});
