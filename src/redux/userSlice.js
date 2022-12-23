import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    note_user: (state, action) => {
      state.email = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { note_user} = userSlice.actions

export default userSlice.reducer