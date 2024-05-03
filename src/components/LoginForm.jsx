import axios from 'axios';
import React,{ useState,useEffect } from 'react';
import postUserData from '../api/loginApi';
import { useSelector,useDispatch } from 'react-redux';
import { setUser } from '../redux/feature/loginData';
import { Link } from 'react-router-dom';

const LoginForm=()=> {
  const user = useSelector((state) => state.user);
  const dispatch= useDispatch()

    const [data, setdata] = useState({
      email: '',
      password: '',
     
    });
    
  // For handling change in inputs 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };  

  // For handling submited 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await postUserData(data, "/guest/c/login");
      const responseData =  response
  
      if (responseData) {
        if (responseData.status === "fail") {
          alert("An error occurred while submitting data");
        } else {
          dispatch(setUser(responseData.token));
          alert("Your data has been submitted successfully");
          console.log(responseData.token); 
        }
      } else {
        alert("Failed to submit data");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred while submitting data");
    }
  };
  

  return (
  <>

  
  
<form className='loginForm' onSubmit={handleSubmit}>
    <div>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" required
     aria-describedby="emailHelp" placeholder="Enter email"
     
     name="email"
     value={data.email}
     onChange={handleInputChange}
     
     
     
     />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"  placeholder="Password"
      name="password"
      value={data.password}
      onChange={handleInputChange} required />
  </div>
 
 
  <button type="submit" className="btn btn-primary">Submit</button>
    </div>
</form>
<div>
  {
    user.user===null ? <></>:
    
  <Link to={"/dashboard"}>Dashboard</Link>
  }
</div>

  
  </>

  
  );
}

export default LoginForm;



   // axios.post('https://api.tripplannerpk.com/guest/c/login',data)
    // .then(response => {
      
    //   console.log('Response:', response.data);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });


  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  
  //     try {
  //         const responseData = await postUserData(data, "/guest/c/login");
          
  //         if (responseData) {
            
  //           dispatch(setUser({
  //             user:responseData.token
  //           }))
  
  
  // if(user===""){
  //   alert("An error occurred while submitting data"); 
  // }
  
  // else{
    
    
  //  alert("Your data has been submitted successfully");
  //   console.log(user);
  // }
  
  
              
  //         } else {
  //             alert("Failed to submit data");
  //         }
  //     } catch (error) {
  //         console.error('Error:', error);
  //         alert("An error occurred while submitting data");
  //     }
  // };