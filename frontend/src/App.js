import Login from "./components/Login/User login/User login "
import AdminLogin from "./components/Login/Admin login/Admin login";
import ShopKeeperLogin from "./components/Login/Shop keeper login/Shop keeper login";
import Registration from "./components/Registration/Registration";


function App() {
  return (
 
      <div >
     <Registration/>
     <Login/>
     <AdminLogin/>
     <ShopKeeperLogin/>
    </div>
  
  );
}

export default App;
