import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: "x@gmail.com",
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    note_user: (state, payload) => {
      state.email = payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { note_user} = userSlice.actions

export default userSlice.reducer