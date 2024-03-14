import Login from './Components/Authentication/Login/Login';
import Signup from "./Components/Authentication/Signup/Signup";
import dashboard from './Components/Dashboard/Dashboard';
import LandingPage from './Components/LandingPage/Landingpage';

// import router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" exact Component={Login}/>
          <Route path="/signup" exact Component={Signup}/>
          <Route path="/dashboard" exact Component={dashboard}/>
          <Route path="/" exact Component={LandingPage}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

