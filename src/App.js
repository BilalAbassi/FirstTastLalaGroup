import Button from 'react-bootstrap/Button';
import LoginForm from './components/LoginForm';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Dashboard from "./pages/Dashboard"
import PrivateRoutes from './components/PrivateRoutes';


function App() {
  return (
    <Routes >
      <Route path='/login' element={<Loginpage/>}/>

      <Route path="/" element={<PrivateRoutes/>}>
      <Route path='/dashboard' element={<Dashboard/>}/>
          </Route>


    </Routes>
  );
}

export default App;
