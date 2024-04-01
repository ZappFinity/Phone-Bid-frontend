import Login from './Components/Authentication/Login/Login';
import Signup from "./Components/Authentication/Signup/Signup";
import LandingPage from './Components/LandingPage/Landingpage';
import Comparisan from './Components/Comparisan/Comparisan';
import Blog from './Components/Blog/Blog'
import ChangePassword from './Components/Authentication/Change Password/ChangePassword';
import Profile from './Components/LandingPage/Profile';
import MyAds from './Components/LandingPage/Menu/MyAds'
import MyMessages from './Components/LandingPage/Menu/MyMessages'
import MyMobile from './Components/LandingPage/Menu/MyMobiles'
import MyOrder from './Components/LandingPage/Menu/MyOrder'
import MySavedAds from './Components/LandingPage/Menu/MySavedAds'

// import router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" exact Component={Login}/>
          <Route path="/signup" exact Component={Signup}/>
          <Route path="/changePass" exact Component={ChangePassword}/>
          <Route path="/profile" exact Component={Profile}/>
          <Route path="/myads" exact Component={MyAds}/>
          <Route path="/mymessage" exact Component={MyMessages}/>
          <Route path="/mymobile" exact Component={MyMobile}/>
          <Route path="/myorder" exact Component={MyOrder}/>
          <Route path="/mysavedads" exact Component={MySavedAds}/>
          <Route path="/blog" element={<Blog />} />
          <Route path="/" exact Component={LandingPage}/>
          <Route path='/comparisan' Component={Comparisan}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

