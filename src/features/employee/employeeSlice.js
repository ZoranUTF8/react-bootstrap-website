import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { getUserFromLocalStorage } from "../../utils/localStorageOperations";
const API_URL = "https://react-bootstrap-website-api.herokuapp.com/api/v1/";

const initialState = {
  isLoading: false,
  firstname: "",
  lastname: "",
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

const employyeSlice = createSlice({
  name: "employee",
  initialState,
});

export default employyeSlice.reducer;
