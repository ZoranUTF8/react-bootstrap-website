import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createNewEmployee, updateExistingEmployee } from "./employeeFunctions";

const API_URL = "https://react-bootstrap-website-api.herokuapp.com/api/v1/";
const initialState = {
  isLoading: false,
  firstName: "",
  lastName: "",
  age: "",
  salary: "",
  address: "",
  position: "",
  department: "",
  educationOptions: [
    "High school",
    "Associate",
    "Bachelor's",
    "Master's",
    "Doctoral",
  ],
  education: "High school",
  statusOptions: ["employed", "not-employed", "suspended", "sick-leave"],
  status: "employed",
  isEditing: false,
  editEmployeeId: "",
};

export const createEmployee = createAsyncThunk(
  "employee/createEmployee",
  async (employee, thunkAPI) => {
    return createNewEmployee(API_URL, employee, thunkAPI);
  }
);

export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async (employee, thunkAPI) => {
    return updateExistingEmployee(API_URL, employee, thunkAPI);
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState,

  reducers: {
    handleFormChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearFormValues: () => {
      return initialState;
    },
    setEditEmployee: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    viewEmployee: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
  extraReducers: {
    [createEmployee.pending]: (state) => {
      state.isLoading = true;
    },
    [createEmployee.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success("Employee has been created.");
    },
    [createEmployee.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [updateEmployee.pending]: (state) => {
      state.isLoading = true;
    },
    [updateEmployee.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success("Employee has been updated.");
    },
    [updateEmployee.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {
  handleFormChange,
  clearFormValues,
  setEditEmployee,
  viewEmployee,
} = employeeSlice.actions;
export default employeeSlice.reducer;
