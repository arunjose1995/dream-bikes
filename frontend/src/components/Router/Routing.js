import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeMain from "../MainHome/MainnHome";
import Registration from "../Registration/Registration";


const RoutingArea=()=>{

    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<HomeMain />} />
                <Route path='/registration' element={<Registration />} />
            </Routes>
        </Router>
    )

}
export default RoutingArea