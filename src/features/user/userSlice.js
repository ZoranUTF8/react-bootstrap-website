import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const API_URL = "https://react-bootstrap-website-api.herokuapp.com/api/v1/";

// initialization state
const initialState = {
  isLoading: false,
  isAdmin: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(API_URL + "auth/register", user);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    console.log(`Login user: ${JSON.stringify(user)}`);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
