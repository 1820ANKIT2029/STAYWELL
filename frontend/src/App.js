// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./components/pages/home.js"
import Login from "./components/pages/Login.js"
import Register from './components/register/Register.jsx';
import Details from "./components/pages/details.js";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/details" element={<Details/>}/>
        
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
