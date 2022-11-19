import axios from "axios";
import { logoutUser } from "./userSlice";
import { clearAllEmployeesStore } from "../allEmployees/allEmployeesSlice";
import { clearFormValues } from "../employee/employeeSlice";

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

export const clearAppStoreOnLogout = async (message, thunkApi) => {
  try {
    // Clear all employees
    thunkApi.dispatch(clearAllEmployeesStore());
    //  Clear values from the add/edit employee
    thunkApi.dispatch(clearFormValues());
    // Logout user
    thunkApi.dispatch(logoutUser(message));

    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};

export const addUserAvatar = async (userAvatar, thunkApi) => {
  if (userAvatar.type === "image/jpeg" || userAvatar.type === "image/png") {
    const data = new FormData();

    data.append("file", userAvatar);
    data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
    data.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
        data
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  } else {
    return thunkApi.rejectWithValue("Check your file type");
  }
};

// Add later
// export const delete = async (url, user, thunkApi) => {
//   try {
//       const response = await axios.post(`${url}auth/login`, user);
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.response.data.msg);
//     }
// };
