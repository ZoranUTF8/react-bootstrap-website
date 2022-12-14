import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorageOperations";

import {
  registerUserFunc,
  loginUserFunc,
  clearAppStoreOnLogout,
  addUserAvatar,
  deleteUserProfile,
  updateUserCredentials,
} from "./userFunctions";

const API_URL = "https://react-bootstarp-webstie-api.onrender.com/api/v1/";

// initialization state
const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserFunc(API_URL, user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserFunc(API_URL, user, thunkAPI);
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    return updateUserCredentials(API_URL, user, thunkAPI);
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (user, thunkAPI) => {
    return deleteUserProfile(API_URL, user, thunkAPI);
  }
);

export const clearAppStoreAndLogout = createAsyncThunk(
  "user/clearAppStoreAndLogout",
  clearAppStoreOnLogout
);

export const uploadUserAvatar = createAsyncThunk(
  "user/uploadAvatar",
  async (userAvatar, thunkApi) => {
    return addUserAvatar(userAvatar, thunkApi);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    logoutUser: (state, { payload }) => {
      state.user = null;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
  },

  // ? once the data is fetched add it to the state
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { userName, isAdmin, token } = payload;

      state.isLoading = false;
      state.user = payload;

      addUserToLocalStorage({ userName, token });
      toast.success(`Hello there ${userName}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { userName, token } = payload;
      state.isLoading = false;
      state.user = payload;

      addUserToLocalStorage(payload);
      toast.success(`Welcome back ${userName}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [clearAppStoreAndLogout.rejected]: () => {
      toast.error("Error logging you out.");
    },
    [uploadUserAvatar.pending]: (state) => {
      state.isLoading = true;
    },
    [uploadUserAvatar.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success("Profile image uploaded successfully.");
    },
    [uploadUserAvatar.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteUser.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteUser.fulfilled]: (state) => {
      state.isLoading = false;
      state.user = null;
      removeUserFromLocalStorage();
      toast.success("Account deleted successfully.");
    },
    [deleteUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoading = false;
      state.user = payload;

      removeUserFromLocalStorage();
      addUserToLocalStorage(payload);
      toast.success("User details updated successfully.");
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});
export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
