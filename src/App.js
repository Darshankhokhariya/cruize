import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Singel from './components/Singel';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Shop from './components/Shop';




function App() {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/singel' element={<Singel/>}></Route>
    </Routes>
    
    
    </>
  );
}

export default App;
