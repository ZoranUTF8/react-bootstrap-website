import axios from "axios";
import { hideLoading, showLoading } from "./allEmployeesSlice";

export const getAllEmployees = async (API_URL, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}employees`, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteSingleEmployee = async (API_URL, employeeId, thunkAPI) => {
  try {
    const response = await axios.delete(`${API_URL}employees/${employeeId}`, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log("mesage from error");
    console.log(error.response.data);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
