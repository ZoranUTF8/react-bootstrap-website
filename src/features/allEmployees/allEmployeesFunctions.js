import axios from "axios";
import { authHeader } from "../../utils/authHeaders";
import UnauthorizedError from "../../utils/unauthorizedError";

export const getAllEmployees = async (API_URL, thunkAPI) => {
  const { page } = thunkAPI.getState().allEmployees;

  try {
    const response = await axios.get(
      `${API_URL}employees?page=${page}`,
      authHeader(thunkAPI)
    );
    return response.data;
  } catch (error) {
    return UnauthorizedError(error, thunkAPI);
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
    return UnauthorizedError(error, thunkAPI);
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
    return UnauthorizedError(error, thunkAPI);
  }
};
