import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:null,


}

export const usernameData = createSlice({
    name:'user',
   initialState, 
   reducers: {
setUser: (state, action) => {
      state.user = action.payload;
    },
   }
})


export const { setUser} =  usernameData.actions

export default usernameData.reducer