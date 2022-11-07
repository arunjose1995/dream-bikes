import { Col, Row } from "react-bootstrap";
import UserLogin from "../Login/UserLogin/UserLogin";
import AdminLogin from "../Login/AdminLogin/AdminLogin";
import ShopKeeperLogin from "../Login/ShopKeeperLogin/ShopKeeperLogin";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./MainHome.css";
const HomeMain = () => {

  //   ------ login forms controls useing states------//
  const [userLoginForm, setUserLoginForm] = useState(true);
  const [adminLoginForm, setAdminLoginForm] = useState(false);
  const [shopkeeperLoginForm, setShopkeeperLoginForm] = useState(false);

  const UserClick = () => {
    setUserLoginForm(true);
    setAdminLoginForm(false);
    setShopkeeperLoginForm(false);
  };

  const AdminClick = () => {
    setUserLoginForm(false);
    setAdminLoginForm(true);
    setShopkeeperLoginForm(false);
  };
  const ShopKeeperClick = () => {
    setUserLoginForm(false);
    setAdminLoginForm(false);
    setShopkeeperLoginForm(true);
  };
  
  return (
  
    <div className="row">
      <div className="col-2"></div>
      <Row className="main-row col-8">
        <Col xs={12} lg={6} sm={12} md={6} className="profile-col">
          <div className="row nav-bar d-flex justify-content-between pt-2">
            <span className="col-1">
              <i className="fa-solid fa-bars"></i>
            </span>
            <span className="col">Online Bike Booking App</span>
            <span className="col-1 me-4 mb-3">
              <DropdownButton
                autoClose="inside"
                variant="link"
                drop="start"
                title={<i className="fa-solid fa-gear"></i>}
              >
                {userLoginForm && (
                  <>
                    <Dropdown.Item as="button" onClick={AdminClick}>
                      Admin Login
                    </Dropdown.Item>
                    <Dropdown.Item as="button" onClick={ShopKeeperClick}>
                      ShopKeeper Login
                    </Dropdown.Item>{" "}
                  </>
                )}
                {adminLoginForm && (
                  <>
                    <Dropdown.Item as="button" onClick={UserClick}>
                      User Login
                    </Dropdown.Item>
                    <Dropdown.Item as="button" onClick={ShopKeeperClick}>
                      ShopKeeper Login
                    </Dropdown.Item>
                  </>
                )}
                {shopkeeperLoginForm && (
                  <>
                    <Dropdown.Item as="button" onClick={UserClick}>
                      User Login
                    </Dropdown.Item>
                    <Dropdown.Item as="button" onClick={AdminClick}>
                      Admin Login
                    </Dropdown.Item>
                  </>
                )}
              </DropdownButton>
            </span>
          </div>
          <div className="body-profile ">
            <p>Book Your Bike Online Get DoorStep Delivery</p>
            <Button
              style={{ fontStyle: "italic" }}
              variant="contained"
              color="secondary"
              onClick={UserClick}
            >
              Book Now
            </Button>
          </div>
          <div className="current-loginPage">
            {userLoginForm && <h3 className="LogerName">User Login</h3>}
            {adminLoginForm && <h3 className="LogerName">Admin Login</h3>}
            {shopkeeperLoginForm && (
              <h3 className="LogerName">ShopKeeper Login</h3>
            )}
          </div>
          <div className="footer-profile row ">
            <h3 style={{ color: "red", fontWeight: "bolder" }}>
              Developer Team >
              <span>
                <i className="fa-solid fa-people-group"></i>
              </span>
            </h3>
            <h6 style={{ color: "#ffff00", fontWeight: "bolder" }} id="anitha">
              Anitha FrontEnd Developer
            </h6>
            <h6 style={{ color: "#ff00ff", fontWeight: "bolder" }} id="palani">
              Palani BackEnd Developer
            </h6>
            <h6 style={{ color: "#00ffff", fontWeight: "bolder" }} id="ajay">
              Ajay FrontEnd Developer
            </h6>
          </div>
        </Col>

        <Col xs={12} sm={12} lg={6} md={6} className="form-col">
          {userLoginForm && <UserLogin />}
          {adminLoginForm && <AdminLogin />}
          {shopkeeperLoginForm && <ShopKeeperLogin />}
        </Col>
      </Row>
      <div className="col-2"></div>
    </div>

  );
};

export default HomeMain;
