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
    <Nav/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/singel/:_id' element={<Singel/>}></Route>
        <Route path='/shop' element={<Shop/>} />

    </Routes>
    
    
    </>
  );
}

export default App;
