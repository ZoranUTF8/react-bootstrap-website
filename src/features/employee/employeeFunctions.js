import axios from "axios";
import { clearFormValues } from "./employeeSlice";
import { logoutUser } from "../user/userSlice";
import { authHeader } from "../../utils/authHeaders";
import UnauthorizedError from "../../utils/unauthorizedError";

export const createNewEmployee = async (API_URL, employee, thunkAPI) => {
  try {
    const response = await axios.post(
      `${API_URL}employees`,
      employee,
      authHeader(thunkAPI)
    );

    thunkAPI.dispatch(clearFormValues());

    return response.data;
  } catch (error) {
    return UnauthorizedError(error, thunkAPI);
  }
};

export const updateExistingEmployee = async (API_URL, employee, thunkAPI) => {
  try {
    const response = await axios.patch(
      `${API_URL}employees/${thunkAPI.getState().employee.editEmployeeId}`,
      employee,
      authHeader(thunkAPI)
    );

    thunkAPI.dispatch(clearFormValues());
    return response.data;
  } catch (error) {
    return UnauthorizedError(error, thunkAPI);
  }
};
