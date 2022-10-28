import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import employeeSlice from "../features/employee/employeeSlice";
import allEmployeesSlice from "../features/allEmployees/allEmployeesSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    employee: employeeSlice,
    allEmployees: allEmployeesSlice,
  },
});
