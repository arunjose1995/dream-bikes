import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
function Registration() {
  const navigate = useNavigate();

  // database user data---//
  const [userDataGet, setUserDataGet] = useState([]);
  console.log(userDataGet);

  // Captcha Genarater
  const [captcha, setCaptcha] = useState("a8n8i2");
  let characters;
  let captchaGen;
  function GenNewCaptcha() {
    characters =
      "1234567890ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    captchaGen = characters[Math.floor(Math.random() * characters.length)];
    for (let i = 0; i < 5; i++) {
      captchaGen =
        captchaGen + characters[Math.floor(Math.random() * characters.length)];
    }
    setCaptcha(captchaGen);
  }

  // -----get UserDetails IN form-----//
  const [userRegDetails, setUserRegDetails] = useState({
    UserName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Captcha: "",
    
  });
  // onchange function in input field------//
  const changeHandler = (e) => {
    setUserRegDetails({ ...userRegDetails, [e.target.name]: e.target.value });
  };
  //  ------set alert >>> input box is empty----//
  const [alertUserName, setAlertUserName] = useState(false);
  const [alertEmail, setAlertEmail] = useState(false);
  const [alertPassword, setAlertPassword] = useState(false);
  const [alertConfirmPassword, setAlertConfirmPassword] = useState(false);
  const [alertCaptcha, setAlertCaptcha] = useState(false);

  // ------set alert >>> input value is not valide-------//
  const [alertValideUserName, setAlertValideUserName] = useState(false);
  const [alertValideEmail, setAlertValideEmail] = useState(false);
  const [alertValidePassword, setAlertValidePassword] = useState(false);
  const [alertValideConfirmPassword, setAlertValideConfirmPassword] =
    useState(false);
  const [alertValideCaptcha, setAlertValideCaptcha] = useState(false);
  // ------check database already regester or not..?-----//
  const [alertAlreadyUserNameHave, setAlertAlreadyUserNameHave] =
    useState(false);
  const [alertAlreadyEmailHave, setAlertAlreadyEmailHave] = useState(false);
  // ------set all condition are success-----//
  const [userNameSuccess, setUserNameSuccess] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [confirmPasswordSuccess, setConfirmPasswordSuccess] = useState(false);
  const [captchaSuccess, setCaptchaSuccess] = useState(false);

  // gett api using register user data-----//
  const getUrl = "http://localhost:5000/userdata";

  const registerUserData = async () => {
    const response = await axios.get(getUrl);
    setUserDataGet(response.data);
  };

  // ----post api useinng user registration-----//
  const url = "http://localhost:5000/Registration";
  const UserData = {
    UserName: userRegDetails.UserName,
    Email: userRegDetails.Email,
    Password: userRegDetails.Password,
  };

  const register = async () => {
    const response = await axios.post(url, UserData);
    console.log(response.data);
  };

  useEffect(() => {
    // after all condition success store userdata in database-----------//
    registerUserData();
    if (
      userNameSuccess &&
      emailSuccess &&
      passwordSuccess &&
      confirmPasswordSuccess &&
      captchaSuccess
    ) {
      // console.log("success");
      setUserNameSuccess(false);
      setEmailSuccess(false);
      setPasswordSuccess(false);
      setConfirmPasswordSuccess(false);
      setCaptchaSuccess(false);
      // notify()
      navigate("/");
      register();
      console.log(userRegDetails);
    }
  }, [
    userNameSuccess,
    emailSuccess,
    passwordSuccess,
    confirmPasswordSuccess,
    captchaSuccess,
    navigate,
  ]);

  // ----submit button function------//s
  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    GenNewCaptcha();
    // ----Check input field is empty or not----//
    if (userRegDetails.UserName === "") {
      setAlertUserName(true);
    } else {
      if (/(?=.*[0-9])(?=.*[a-z])/.test(userRegDetails.UserName)) {
        setAlertUserName(false);
        setAlertValideUserName(false);
        // ----check that user name already register or not----//
        let uName;
        userDataGet.map((data) => {
          if (userRegDetails.UserName === data.UserName) {
            uName = "AlreadyRegName";
            // setAlertAlreadyUserNameHave(true);
          }
        });
         if (uName === "AlreadyRegName") {

          setAlertAlreadyUserNameHave(true);
          setUserNameSuccess(false);
        } else {
          setAlertAlreadyUserNameHave(false);
          setUserNameSuccess(true);
        }
      } else {
        setAlertUserName(false);
        setAlertValideUserName(true);
      }
    }
    if (userRegDetails.Email === "") {
      setAlertEmail(true);
    } else {
      if (
        /(^[a-z][a-z$#!&0-9]*)[@]([a-z,0-9]*)[.]([a-z]{2,3})$/.test(
          userRegDetails.Email
        )
      ) {
        setAlertEmail(false);
        setAlertValideEmail(false);
        // ----check that Email address already register or not----//

        let uEmail;
        userDataGet.map((data) => {
          if (userRegDetails.Email === data.Email) {
            uEmail = "AlreadyRegEmail";
          }
        });

        if (uEmail === "AlreadyRegEmail") {
          setAlertAlreadyEmailHave(true);
          setEmailSuccess(false);
        } else {
          setAlertAlreadyEmailHave(false);
          setEmailSuccess(true);
        }
        // setEmailSuccess(true);
      } else {
        setAlertEmail(false);
        setAlertValideEmail(true);
      }
    }
    if (userRegDetails.Password === "") {
      setAlertPassword(true);
    } else {
      if (userRegDetails.Password.length < 8) {
        setAlertPassword(false);
        setAlertValidePassword(true);
      } else if (!/(?=.*[0-9])(?=.*[a-z])/.test(userRegDetails.Password)) {
        setAlertPassword(false);
        setAlertValidePassword(true);
      } else {
        setAlertPassword(false);
        setAlertValidePassword(false);
        setPasswordSuccess(true);
      }
    }
    if (userRegDetails.ConfirmPassword === "") {
      setAlertConfirmPassword(true);
    } else {
      if (userRegDetails.Password === userRegDetails.ConfirmPassword) {
        setAlertConfirmPassword(false);
        setAlertValideConfirmPassword(false);
        setConfirmPasswordSuccess(true);
      } else {
        setAlertConfirmPassword(false);
        setAlertValideConfirmPassword(true);
      }
    }
    if (userRegDetails.Captcha === "") {
      setAlertCaptcha(true);
    } else {
      if (captcha === userRegDetails.Captcha) {
        setAlertCaptcha(false);
        setAlertValideCaptcha(false);
        setCaptchaSuccess(true);
      } else {
        setAlertCaptcha(false);
        setAlertValideCaptcha(true);
      }
    }
  };
  window.addEventListener("load", () => {
    GenNewCaptcha();
  });
  return (
    <div className="reg_main">
      <Card className="Reg_Card">
        <Card.Body style={{ borderRadius: "20px" }}>
          <div className="row justify-content-end">
            <Card.Title className="col-7 text-danger ">
              Registration Form
            </Card.Title>
            <CloseButton
              variant="white"
              onClick={() => navigate("/")}
              className="col-2 me-3 fs-5"
            />
          </div>
          <Form className="Form-Control">
            <Form.Group className="mb-1">
              <Form.Label>UserName :</Form.Label>
              <Form.Control
                name="UserName"
                onChange={changeHandler}
                type="text"
                placeholder="Enter Unick Name"
              />
              {alertUserName && (
                <Form.Text style={{ color: "red" }}>
                  *Please fill in this field.
                </Form.Text>
              )}
              {alertValideUserName && (
                <Form.Text style={{ color: "red" }}>
                  *UserName must be contain Number & letters.
                </Form.Text>
              )}
              {alertAlreadyUserNameHave && (
                <Form.Text style={{ color: "red" }}>
                  *UserName is already register..!
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Email Address :</Form.Label>
              <Form.Control
                name="Email"
                onChange={changeHandler}
                type="email"
                placeholder="Email"
              />
              {alertEmail && (
                <Form.Text style={{ color: "red" }}>
                  *Please fill in this field.
                </Form.Text>
              )}
              {alertValideEmail && (
                <Form.Text style={{ color: "red" }}>
                  *Enter Valide Email address.
                </Form.Text>
              )}
              {alertAlreadyEmailHave && (
                <Form.Text style={{ color: "red" }}>
                  *this Email address already register.
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Password :</Form.Label>
              <Form.Control
                name="Password"
                onChange={changeHandler}
                type="password"
                placeholder="Password"
              />
              {alertPassword && (
                <Form.Text style={{ color: "red" }}>
                  *Please fill in this field.
                </Form.Text>
              )}
              {alertValidePassword && (
                <Form.Text style={{ color: "red" }}>
                  *Your password should contain at least 8 character and contain
                  character and number.
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Confirm Password :</Form.Label>
              <Form.Control
                name="ConfirmPassword"
                onChange={changeHandler}
                type="password"
                placeholder="Repassword"
              />
              {alertConfirmPassword && (
                <Form.Text style={{ color: "red" }}>
                  *Please fill in this field.
                </Form.Text>
              )}
              {alertValideConfirmPassword && (
                <Form.Text style={{ color: "red" }}>
                  *Enter valide password.
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Captcha :</Form.Label>
              <Row className="me-5">
                <Col xs={5}>
                  <Form.Control
                    name="Captcha"
                    onChange={changeHandler}
                    style={{
                      fontSize: "20px",
                      backgroundColor: "#EEDD82",
                      textAlign: "center",
                    }}
                    readOnly
                    value={captcha}
                  />
                </Col>
                <Col xs={2}>
                  <Button variant="primary" onClick={GenNewCaptcha}>
                    <i className="fa-solid fa-rotate"></i>
                  </Button>
                </Col>
              </Row>
              <Form.Control
                className="mt-2 mb-2"
                name="Captcha"
                type="text"
                placeholder="Enter a captcha"
                onChange={changeHandler}
              />
              {alertCaptcha && (
                <Form.Text style={{ color: "red" }}>
                  *Please fill in this field.
                </Form.Text>
              )}
              {alertValideCaptcha && (
                <Form.Text style={{ color: "red" }}>
                  *Enter Correct Captcha.
                </Form.Text>
              )}
            </Form.Group>
            <Button
              variant="primary"
              style={{ marginLeft: "130px" }}
              type="submit"
              onClick={handleSubmit}
            >
              Create Account
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Registration;
