import axios from "axios";
import { logoutUser } from "./userSlice";

export const registerUserFunc = async (url, user, thunkApi) => {
    try {
        const response = await axios.post(`${url}auth/register`, user);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
      }
};
