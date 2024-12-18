import logo from './logo.svg';
import './App.css';
import SignupForm from './Components/SignupForm'
import NavBs from './Components/NavBs';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
   
      <NavBs></NavBs>
      <SignupForm/>
 
      
    </div>
  );
}

export default App;
