//without ApiCalls
// import { createSlice } from '@reduxjs/toolkit';

// export const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     name: 'john',
//     email: 'john@email.com',
//   },
//   reducers: {
//     update: (state, action) => {
//       state.name = action.payload.name;
//       state.email = action.payload.email;
//     },
//     remove: (state) => (state = {}),

//     addHello: (state, action) => {
//       state.name = 'Hello ' + action.payload.name;
//     },
//   },
// });

// export const { update, remove, addHello } = userSlice.actions;

// export default userSlice.reducer;

////////////////////////////////////////////////////////

//withApiCalls

// import { createSlice } from '@reduxjs/toolkit';

// export const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     userInfo: {
//       name: 'John',
//       email: 'john@email.com',
//     },
//     pending: null,
//     error: false,
//   },
//   reducers: {
//     updateStart: (state) => {
//       state.pending = true;
//     },
//     updateSuccess: (state, action) => {
//       state.pending = false;
//       state.userInfo = action.payload;
//     },
//     updateFailure: (state) => {
//       state.pending = null;
//       state.error = true;
//     },

//     // addHello: (state, action) => {
//     //   state.name = 'Hello ' + action.payload.name;
//     // },
//     remove: (state) => (state = {}),
//   },
// });

// export const { updateStart, updateSuccess, updateFailure, remove, addHello } =
//   userSlice.actions;

// export default userSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteUser = createAsyncThunk('users/update', async (user) => {
  const response = await axios.post(
    'http://localhost:3001/api/users/1/update',
    user
  );
  return response.data;
});

export const userDelete = createSlice({
  name: 'user',
  initialState: {
    userInfo2: {
      name: 'Michael',
      email: 'michael@email.com',
    },
    pending2: null,
    error2: null,
  },
  reducers: {},
  extraReducers: {
    [deleteUser.pending2]: (state) => {
      state.pending2 = true;
      state.error2 = false;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.pending2 = false;
    },
    [deleteUser.rejected]: (state) => {
      state.pending2 = null;
      state.error2 = true;
    },
    remove: (state) => (state = {}),
  },
});

export const { remove } = userDelete.actions;

export default userDelete.reducer;
