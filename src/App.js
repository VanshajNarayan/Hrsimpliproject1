import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/HomeFolder/Home';
import About from './Components/AboutFolder/About';
import ForJob from './Components/ForJobSeekerFolder/ForJob';
import Companies from './Components/CompaniesFolder/Compani';
import Login from './Components/LoginFolder/Login';
import Signin from './Components/SignInFolder/Signin';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/jobseekers" element={<ForJob/>} />
          <Route path="/companies" element={<Companies/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signin' element={<Signin/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
