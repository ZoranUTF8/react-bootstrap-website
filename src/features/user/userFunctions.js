import axios from "axios";
import { logoutUser } from "./userSlice";

export const registerUserFunc = async (url, user, thunkApi) => {
    try {
        const response = await axios.post(`${url}auth/register`, user);
        return response.data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.msg);
      }
};

export const loginUserFunc = async (url, user, thunkApi) => {
    try {
        const response = await axios.post(`${url}auth/login`, user);
        return response.data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.response.data.msg);
      }
};
