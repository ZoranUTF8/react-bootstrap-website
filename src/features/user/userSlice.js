import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorageOperations";
import { registerUserFunc } from "./userFunctions";

const API_URL = "https://react-bootstrap-website-api.herokuapp.com/api/v1/";

// initialization state
const initialState = {
  isLoading: false,
  sidebarOpen: true,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserFunc(API_URL, user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}auth/login`, user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    logoutUser: (state) => {
      state.user = null;
      state.sidebarOpen = false;
      removeUserFromLocalStorage();
      toast.success("Logged out successfully");
    },
  },

  // ? once the data is fetched add it to the state
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { userName, isAdmin } = payload;
      state.isLoading = false;
      state.user = payload;
      state.isAdmin = isAdmin;
      addUserToLocalStorage(payload);
      toast.success(`Hello there ${userName}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { userName, isAdmin } = payload;
      state.isLoading = false;
      state.user = payload;
      state.isAdmin = isAdmin;
      addUserToLocalStorage(payload);
      toast.success(`Welcome back ${userName}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});
export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
