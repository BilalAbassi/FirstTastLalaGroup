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
      state.user = action.payload?.data;
      state.usertoken = action.payload?.token;
      state.auth = true;
      localStorage.setItem('userData', JSON.stringify(state.user));
      Cookies.set('userData', JSON.stringify(state.usertoken), { expires: 7 }, { path: "/" });
    },
    logoutUser: (state) => {
      localStorage.removeItem('userData');
      Cookies.remove('userData');
      state.user = null;
      state.auth = false;
      state.usertoken = null;
    },
    initializeFromLocalStorage: (state) => {
      const cookieValue = Cookies.get('userData');
      if (!cookieValue) {
        localStorage.removeItem('userData');
        state.user = null;
        state.auth = false;
        state.usertoken = null;
        return
      } 

      const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
          state.user = userData;
          state.usertoken = cookieValue;
          state.auth = true;
        }
      }
    
  },
});


export const { setUser,logoutUser, initializeFromLocalStorage } = usernameData.actions;

export default usernameData.reducer;
