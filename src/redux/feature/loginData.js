import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  user: null,
  auth:false,
  usertoken:null


  
};

export const usernameData = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
    
        state.user = action.payload
        state.usertoken = state.user.token
        state.auth=true
      Cookies.set('userData', JSON.stringify(state.usertoken), { expires: 7 },);
      
     
    },
    logoutUser: (state) => {
      state.user = null
      state.auth=false
      state.usertoken=null
      
      Cookies.remove('userData'); 
    },
  },
});

export const { setUser,logoutUser } = usernameData.actions;

export default usernameData.reducer;
