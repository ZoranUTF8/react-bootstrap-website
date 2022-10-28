import axios from "axios";
import { clearFormValues } from "./employeeSlice";
import { logoutUser } from "../user/userSlice";

export const createNewEmployee = async (API_URL, employee, thunkAPI) => {
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
};
