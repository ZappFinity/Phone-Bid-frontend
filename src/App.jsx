import Blog from "./Components/Blog/Blog";
import Profile from "./Components/LandingPage/Profile";
import MyAds from "./Components/LandingPage/Menu/MyAds";
import MyOrder from "./Components/LandingPage/Menu/MyOrder";
import Comparisan from "./Components/Comparisan/Comparisan";
import Login from "./Components/Authentication/Login/Login";
import SellMobile from "./Components/SellMobile/SellMobile";
import MyMobile from "./Components/LandingPage/Menu/MyMobiles";
import AddPost from "./Components/LandingPage/AddPost/AddPost";
import LandingPage from "./Components/LandingPage/Landingpage";
import Signup from "./Components/Authentication/Signup/Signup";
import MySavedAds from "./Components/LandingPage/Menu/MySavedAds";
import MyMessages from "./Components/LandingPage/Menu/MyMessages";
import NewMobiles from "./Components/LandingPage/NewMobile/NewMobiles";
import NewMobileDetail from "./Components/LandingPage/NewMobile/Detail";
import UsedMobiles from "./Components/LandingPage/UsedMobile/UsedMobiles";
import UsedMobileDetail from "./Components/LandingPage/UsedMobile/Detail";
import NewMobileCheckout from "./Components/LandingPage/NewMobile/Checkout";
import UsedMobileCheckout from "./Components/LandingPage/UsedMobile/Checkout";
import AccessoriesCheckout from "./Components/LandingPage/Accessories/Checkout";
import AccessoriesDetail from "./Components/LandingPage/Accessories/Detail";
import MobileAccessories from "./Components/LandingPage/Accessories/MobileAccessories";
import ChangePassword from "./Components/Authentication/Change Password/ChangePassword";
import MobileRepair from "./Components/LandingPage/MobileRepair/MobileRepairModule";
import MobileType from "./Components/LandingPage/MobileRepair/MobileType";
import AddMobileRepair from "./Components/LandingPage/MobileRepair/AddMobileRepair";
import BidMobiles from "./Components/LandingPage/Biding/BidMobiles";
import BidMobileDetail from "./Components/LandingPage/Biding/BidMobileDetail";
import PlaceMobileBid from "./Components/LandingPage/Biding/PlaceMobileBid";
import BidSuccess from "./Components/LandingPage/Biding/BidSuccess";
import UserBidMobile from "./Components/LandingPage/Biding/UserBidMobile";
import RepairingPorgress from "./Components/LandingPage/MobileRepair/RepairingProgress"

// import router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/myads" exact Component={MyAds} />
          <Route path="/login" exact Component={Login} />
          <Route path="/" exact Component={LandingPage} />
          <Route path="/signup" exact Component={Signup} />
          <Route path="/profile" exact Component={Profile} />
          <Route path="/comparisan" Component={Comparisan} />
          <Route path="/myorder" exact Component={MyOrder} />
          <Route path="/mymobile" exact Component={MyMobile} />
          <Route path="/mymessage" exact Component={MyMessages} />
          <Route path="/newmobile" exact Component={NewMobiles} />
          <Route path="/mobilerepair" exact Component={MobileRepair} />
          <Route path="/mobiletype" exact Component={MobileType} />
          <Route path="/bidsuccess" exact Component={BidSuccess} />
          <Route path="/add" exact Component={AddMobileRepair} />
          <Route path="/postmobilead" exact Component={AddPost} />
          <Route path="/bidingmobile" exact Component={BidMobiles} />
          <Route path="/userbidmobile" exact Component={UserBidMobile} />
          <Route path="/repairingporgress" exact Component={RepairingPorgress} />
          <Route
            path="/placemobilebid/:bidId"
            exact
            Component={PlaceMobileBid}
          />
          <Route
            path="/bidmobiledetail/:bidMobileDetailId"
            exact
            Component={BidMobileDetail}
          />
          <Route path="/mysavedads" exact Component={MySavedAds} />
          <Route path="/sellmobile" exact Component={SellMobile} />
          <Route path="/usedmobile" exact Component={UsedMobiles} />
          <Route path="/changePass" exact Component={ChangePassword} />
          <Route path="/accessories" exact Component={MobileAccessories} />
          <Route
            path="/newmobilecheckout"
            exact
            Component={NewMobileCheckout}
          />
          <Route
            path="/usedmobilecheckout"
            exact
            Component={UsedMobileCheckout}
          />
          <Route
            path="/accessoriescheckout"
            exact
            Component={AccessoriesCheckout}
          />
          <Route
            path="/accessoriesdetail/:detailId"
            exact
            Component={AccessoriesDetail}
          />
          <Route
            path="/usedmobiledetail/:detailId"
            exact
            Component={UsedMobileDetail}
          />
          <Route
            path="/newmobiledetail/:detailId"
            exact
            Component={NewMobileDetail}
          />
        </Routes>
      </Router>
     
     
      
    </>
  );
}

export default App;
