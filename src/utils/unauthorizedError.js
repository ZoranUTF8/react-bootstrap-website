import { clearAppStoreAndLogout } from "../features/user/userSlice";

// Check if error is becouse of unauthorized json token
const UnauthorizedError = (error, thunkAPI) => {
  console.log("inisde UnauthorizedError");
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearAppStoreAndLogout());
    return thunkAPI.rejectWithValue("Unauthorized! Logging out...");
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};

export default UnauthorizedError;
