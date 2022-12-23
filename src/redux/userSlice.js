import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  username:null,
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    note_user: (state, action) => {
      state.email = action.payload;
    },
    note_username: (state, action) => {
      state.username = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { note_user, note_username} = userSlice.actions

export default userSlice.reducer