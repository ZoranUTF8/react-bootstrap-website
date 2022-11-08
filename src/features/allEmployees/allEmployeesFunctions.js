import axios from "axios";
import { authHeader } from "../../utils/authHeaders";

export const getAllEmployees = async (API_URL, thunkAPI) => {
  try {
    const response = await axios.get(
      `${API_URL}employees`,
      authHeader(thunkAPI)
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteSingleEmployee = async (API_URL, employeeId, thunkAPI) => {
  try {
    const response = await axios.delete(
      `${API_URL}employees/${employeeId}`,
      authHeader(thunkAPI)
    );

    return response.data;
  } catch (error) {
    console.log("mesage from error");
    console.log(error.response.data);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getDefaultEmployeesStats = async (API_URL, thunkAPI) => {
  try {
    const response = await axios.get(
      `${API_URL}employees/stats`,
      authHeader(thunkAPI)
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
