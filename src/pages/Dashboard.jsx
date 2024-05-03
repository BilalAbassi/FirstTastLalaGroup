import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { logoutUser } from '../redux/feature/loginData';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  console.log(user)
  

  const dispatch = useDispatch()



console.log(user.user.message)



  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login', { replace: true });

  };


  return (
    <div style={{display:"flex",minHeight:"500px", justifyContent:"center",alignItems:"center"}}>
      <div>

      dashboard
      <h2>Wellcome {user.user?.data?.Email}</h2>
      <p>your massage is {user.user?.message}</p>

      <button className='btn-danger p-2' onClick={handleLogout}>
        LogOut


      </button>
      </div>



    </div>
  )
}

export default Dashboard
