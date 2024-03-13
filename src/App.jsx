import Login from './Components/Authentication/Login/Login';
import Signup from "./Components/Authentication/Signup/Signup";
import dashboard from './Components/Dashboard/Dashboard';

// import router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact Component={Login}/>
          <Route path="/signup" exact Component={Signup}/>
          <Route path="/dashboard" exact Component={dashboard}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

