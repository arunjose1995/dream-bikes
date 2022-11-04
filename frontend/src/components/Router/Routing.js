import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeMain from "../MainHome/MainnHome";
import Registration from "../Registration/Registration"
import UserHomePage from "../Home /Userhomepage/UserHomePage";
import ShopKeeperHomePage from "../Home /ShopKeeperHomePage/ShopKeeperHomePage.js"
import UserHomePageBuy from "../Home /Userhomepage/UserHomePageBuy.js"
import AdminHomePage from "../Home /AdminHomePage/AdminHomePage";

const RoutingArea = () => {

    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<HomeMain />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/userHomePage' element={<UserHomePage />} />
                <Route path='/ShopKeeperHomePage' element={<ShopKeeperHomePage />} />
                <Route path='/userHomePageBuy' element={<UserHomePageBuy />}/>
                <Route path='/AdminHomePage' element={<AdminHomePage />} />
            </Routes>
        </Router>
    )

}
export default RoutingArea