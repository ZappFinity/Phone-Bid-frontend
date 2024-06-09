import Blog from './Components/Blog/Blog'
import Profile from './Components/LandingPage/Profile';
import MyAds from './Components/LandingPage/Menu/MyAds'
import MyOrder from './Components/LandingPage/Menu/MyOrder'
import Comparisan from './Components/Comparisan/Comparisan';
import Login from './Components/Authentication/Login/Login';
import SellMobile from './Components/SellMobile/SellMobile';
import MyMobile from './Components/LandingPage/Menu/MyMobiles'
import AddPost from './Components/LandingPage/AddPost/AddPost';
import LandingPage from './Components/LandingPage/Landingpage';
import Signup from "./Components/Authentication/Signup/Signup";
import MySavedAds from './Components/LandingPage/Menu/MySavedAds'
import MyMessages from './Components/LandingPage/Menu/MyMessages'
import NewMobiles from './Components/LandingPage/NewMobile/NewMobiles';
import UsedMobiles from './Components/LandingPage/UsedMobile/UsedMobiles';
import MobileAccessories from './Components/LandingPage/Accessories/MobileAccessories';
import ChangePassword from './Components/Authentication/Change Password/ChangePassword';

// import router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/myads" exact Component={MyAds}/>
          <Route path="/login" exact Component={Login}/>
          <Route path="/" exact Component={LandingPage}/>
          <Route path="/signup" exact Component={Signup}/>
          <Route path="/profile" exact Component={Profile}/>
          <Route path='/comparisan' Component={Comparisan}/>
          <Route path='/addpost' exact Component={AddPost}/>
          <Route path="/myorder" exact Component={MyOrder}/>
          <Route path="/mymobile" exact Component={MyMobile}/>
          <Route path="/mymessage" exact Component={MyMessages}/>
          <Route path='/newmobile' exact Component={NewMobiles}/>
          <Route path='/usedmobile' exact Component={UsedMobiles}/>
          <Route path="/mysavedads" exact Component={MySavedAds}/>
          <Route path="/sellmobile" exact Component={SellMobile}/>
          <Route path='/accessories' exact Component={MobileAccessories}/>
          <Route path="/changePass" exact Component={ChangePassword}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

