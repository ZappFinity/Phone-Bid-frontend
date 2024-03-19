import Login from './Components/Authentication/Login/Login';
import Signup from "./Components/Authentication/Signup/Signup";
import LandingPage from './Components/LandingPage/Landingpage';
import Comparisan from './Components/Comparisan/Comparisan';

// import router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" exact Component={Login}/>
          <Route path="/signup" exact Component={Signup}/>
          
          <Route path="/" exact Component={LandingPage}/>
          <Route path='/comparisan' Component={Comparisan}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

