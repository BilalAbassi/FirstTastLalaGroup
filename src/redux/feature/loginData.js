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
    
        state.user = action.payload?.data
        state.usertoken = action.payload?.token

        state.auth=true
        localStorage.setItem('userData', JSON.stringify(state.user));
        
  // Set the data in a cookie in seconds 0.00007
  // document.cookie = `useData=${JSON.stringify(state.usertoken)}; expires=${new Date(Date.now() + 3600000).toUTCString()}; path=/`;

  
  Cookies.set('userData', JSON.stringify(state.usertoken), { expires: 7 }, {path:"/"});
      
     
    },
    logoutUser: (state) => {
      localStorage.removeItem('userData');
      Cookies.remove('userData'); 
      
      state.user = null
      state.auth=false
      state.usertoken=null
      
    },
    initializeFromLocalStorage: (state) => {
      const userData = JSON.parse(localStorage.getItem('userData'));
const cookieValue = Cookies.get('userData');

      if (userData) {
        state.user = userData;
        state.usertoken = cookieValue
        state.auth = true;
      }
    }
  
  },
});

export const { setUser,logoutUser, initializeFromLocalStorage } = usernameData.actions;

export default usernameData.reducer;
