import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { getUserFromLocalStorage } from "../../utils/localStorageOperations";
import { logoutUser } from "../user/userSlice";
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
  statusOptions: ["employed", "not employed", "suspended", "sick leave"],
  status: "employed",
  isEditing: false,
  editEmployeeId: "",
};

export const createEmployee = createAsyncThunk(
  "employee/createEmployee",
  async (employee, thunkAPI) => {
    try {

      const response = await axios.post(`${API_URL}employees`, employee, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });


      thunkAPI.dispatch(clearFormValues());

      return response.data;
      
    } catch (error) {
      // if authentication not valid logout useFr
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue("Unauthorized, login out...");
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const employyeSlice = createSlice({
  name: "employee",
  initialState,

  reducers: {
    handleFormChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearFormValues: () => {
      return initialState;
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
  },
});

export const { handleFormChange, clearFormValues } = employyeSlice.actions;
export default employyeSlice.reducer;
