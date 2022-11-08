import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllEmployees,
  deleteSingleEmployee,
  getDefaultEmployeesStats,
} from "./allEmployeesFunctions";

const API_URL = "https://react-bootstrap-website-api.herokuapp.com/api/v1/";

const initialState = {
  isDeleting: false,
  isGettingEmployees: false,
  allEmployees: [],
  defaultStats: [],
  monthlyApplication: [],
  isGettingDefaultStats: false,
};

export const getEmployees = createAsyncThunk(
  "employee/getEmployyes",
  async (_, thunkAPI) => {
    return getAllEmployees(API_URL, thunkAPI);
  }
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (employeeId, thunkAPI) => {
    return deleteSingleEmployee(API_URL, employeeId, thunkAPI);
  }
);

export const getDefaultStats = createAsyncThunk(
  "employee/getDefaultStats",
  async (_, thunkAPI) => {
    return getDefaultEmployeesStats(API_URL, thunkAPI);
  }
);
const allEmployeesSlice = createSlice({
  name: "allEmployees",
  initialState,

  extraReducers: {
    [getEmployees.pending]: (state) => {
      state.isGettingEmployees = true;
    },
    [getEmployees.fulfilled]: (state, { payload }) => {
      state.allEmployees = payload.allEmployees;
      state.isGettingEmployees = false;
      state.isDeleting = false;
    },
    [getEmployees.rejected]: (state, { payload }) => {
      state.isGettingEmployees = false;
      toast.error(payload);
    },
    [deleteEmployee.pending]: (state) => {
      state.isDeleting = true;
    },
    [deleteEmployee.fulfilled]: (state, { payload: { id } }) => {
      state.isDeleting = false;
      toast.success(`Employee with ${id} was successfully deleted.`);
    },
    [deleteEmployee.rejected]: (state, { payload }) => {
      state.isDeleting = false;
      toast.error(payload);
    },
    [getDefaultStats.pending]: (state) => {
      state.isGettingDefaultStats = true;
    },
    [getDefaultStats.fulfilled]: (
      state,
      { payload: { employeesStats, monthlyApplication } }
    ) => {
      state.isGettingDefaultStats = false;
      state.defaultStats = employeesStats;
      state.monthlyApplication = monthlyApplication;
    },
    [getDefaultStats.rejected]: (state, { payload }) => {
      state.isGettingDefaultStats = false;
      toast.error(payload);
    },
  },
});

export default allEmployeesSlice.reducer;
