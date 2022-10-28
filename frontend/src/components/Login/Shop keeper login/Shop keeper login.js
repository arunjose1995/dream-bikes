// import "./Shop keeper login.css"
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import { useState } from "react";

// const ShopKeeperLogin = () => {

//     //----get shop keeper details in form---//
//     const [ShopKeeperLoginDetails, setShopKeeperLoginDetails] = useState({
//         EmailAddress: "",
//         password: ""
//     })

//     // onchange function in input field------//

//     const changeHandler = (e) => {
//         setShopKeeperLoginDetails({ ...ShopKeeperLoginDetails, [e.target.name]: e.target.value })
//         // console.log(ShopKeeperLoginDetails);
//     }

//     //  ------set alert >>> input box is empty----//
//     const [alertEmail, setAlertEmail] = useState(false)
//     const [alertPassword, setAlertPassword] = useState(false)

//     //-----set valid alert >>> input value is not valid
//     const [alertValidEmail, setAlertvalidEmail] = useState(false)
//     const [alertValidPassword, setAlertValidPassword] = useState(false)


//     //----submit button function-------// 
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (ShopKeeperLoginDetails.EmailAddress === "") {
//             setAlertEmail(true)
//             setAlertvalidEmail(false)
//         }
//         else {
//             setAlertEmail(false)
//             if (ShopKeeperLoginDetails.EmailAddress === "anithalkutty200@gmail.com") {
//                 setAlertvalidEmail(false)
//             }
//             else {
//                 setAlertvalidEmail(true)
//             }

//         }

//         if (ShopKeeperLoginDetails.password === "") {
//             setAlertPassword(true)
//             setAlertValidPassword(false)
//         }
//         else {
//             setAlertPassword(false)
//             if (ShopKeeperLoginDetails.password === "kutty") {
//                 setAlertValidPassword(false)
//             }
//             else {
//                 setAlertValidPassword(true)
//             }

//         }


//         if (ShopKeeperLoginDetails.EmailAddress === "anithalkutty200@gmail.com" && ShopKeeperLoginDetails.password === "kutty") {
//             alert("login successfully!")

//         }


//     }

//     return (<div>
//         <Form style={{ backgroundColor: "white", width: "400px", height: "400px", fontFamily: "serif", margin: "auto", marginTop: "100px" }}>
//             <div style={{ marginLeft: "190px" }}><i className="fa-solid fa-lock"></i></div>
//             <h1 style={{ marginLeft: "50px", marginTop: "10px" }}>Shop keeper Login</h1>
//             <Form.Group className="mb-3" controlId="formBasicEmail" style={{ marginLeft: "30px" }}>
//                 <Form.Label><h5>Email address:</h5></Form.Label>
//                 <Form.Control type="email" name="EmailAddress" onChange={changeHandler} placeholder="Email Address" style={{ width: "300px", height: "30px" }} />
//                 {alertEmail && <Form.Text style={{ color: "red" }}>
//                     *Please fill in this field.
//                 </Form.Text>}
//                 {alertValidEmail && <Form.Text style={{ color: "red" }}>
//                     *enter valid Email address.
//                 </Form.Text>}
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword" style={{ marginLeft: "30px" }}>
//                 <Form.Label><h5>Password:</h5></Form.Label>
//                 <Form.Control type="password" name="password" onChange={changeHandler} placeholder="Password" style={{ width: "300px", height: "30px" }} />
//                 {alertPassword && <Form.Text style={{ color: "red" }}>
//                     *Please fill in this field.
//                 </Form.Text>}
//                 {alertValidPassword && <Form.Text style={{ color: "red" }}>
//                     *enter valid password.
//                 </Form.Text>}
//             </Form.Group>

//             <Nav style={{ marginTop: "-20px", textDecorationLine: "underline" }} >
//                 <Nav.Link href="/home" style={{ marginLeft: "210px" }}>forget password?</Nav.Link>
//             </Nav>
//             <div >

//                 <Button variant="primary" type="button" onClick={handleSubmit} style={{ width: "100px", height: "40px", marginLeft: "140px" }}>
//                     Login
//                 </Button>
//             </div>
//             <Nav style={{ textDecorationLine: "underline" }}>
//                 <Nav.Link href="/#" style={{ marginLeft: "20px" }} >back?</Nav.Link>
//             </Nav>

//         </Form>

//     </div>

//     )
// }
// export default ShopKeeperLogin


// import style from "./user login.css"
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Dropdown from 'react-bootstrap/Dropdown';
// const Login = () => {

//     const Account = () => {
//         console.log("FDCGHJK");
//     }

//     return (
//         <div className={style.body} >

//             <div >

//                 <Dropdown>
//                     <Dropdown.Toggle id="dropdown-basic" style={{ position: 'absolute', top: 10, right: 10,backgroundColor:"black",borderColor:"black"}}>
//                         <i  className="fa-solid fa-gear"></i>
//                     </Dropdown.Toggle>

//                     <Dropdown.Menu>
//                         <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
//                         <Dropdown.Item href="#/action-2">show Room</Dropdown.Item>

//                     </Dropdown.Menu>
//                 </Dropdown>
//             </div>

//             <div style={{ padding: "50px" }}>
//                 <Form style={{ backgroundColor: "white", width: "400px", height: "400px", fontFamily: "serif" }}>
//                     <div style={{ marginLeft: "190px" }}><i className="fa-solid fa-lock"></i></div>
//                     <h1 style={{ marginLeft: "140px", marginTop: "10px" }}>Login</h1>
//                     <Form.Group className="mb-3" controlId="formBasicEmail" style={{ marginLeft: "30px" }}>
//                         <Form.Label><h5>Email / User name:</h5></Form.Label>
//                         <Form.Control type="email" placeholder="Email/User name" style={{ width: "300px", height: "30px", marginLeft: "30px" }} />
//                         <Form.Text className="text-muted">
//                         </Form.Text>
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicPassword" style={{ marginLeft: "30px" }}>
//                         <Form.Label><h5>Password:</h5></Form.Label>
//                         <Form.Control type="password" placeholder="Password" style={{ width: "300px", height: "30px", marginLeft: "30px" }} />
//                     </Form.Group>

//                     <Nav style={{ marginTop: "-20px", textDecorationLine: "underline" }} >
//                         <Nav.Link href="/home" style={{ marginLeft: "210px" }}>forget password?</Nav.Link>
//                     </Nav>
//                     <div style={{ marginTop: "20px" }}>

//                         <Button variant="primary" type="Login" style={{ width: "100px", height: "40px", marginLeft: "140px" }}>
//                             Login
//                         </Button>
//                     </div>
//                     <Nav style={{ marginTop: "10px", textDecorationLine: "underline" }}>
//                         <Nav.Link href="/#" style={{ marginLeft: "20px" }} onClick={Account} >Create an account?</Nav.Link>
//                     </Nav>
//                 </Form>
//             </div>
//         </div>
//     )
// }
// export default Login

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";

const ShopKeeperLogin = () => {
    // ------Get  email&pwd in input box -------//
    const [userLoginDetails, setUserLoginDetails] = useState({
        Email: "",
        Password: "",
    });
    const handleCatchValues = (e) => {
        setUserLoginDetails({
            ...userLoginDetails,
            [e.target.name]: e.target.value,
        });
    };
    //  ------set alert >>> input box is empty----//
    const [alertEmail, setAlertEmail] = useState(false);
    const [alertPassword, setAlertPassword] = useState(false);
    // ------set alert >>> input value is not valide-------//
    const [alertValideEmail, setAlertValideEmail] = useState(false);
    const [alertValidePassword, setAlertValidePassword] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        if (userLoginDetails.Email === "") {
            setAlertEmail(true);
        } else {
            // -----condition check email valide or not ----//
            setAlertEmail(false);
            setAlertValideEmail(true);
        }
        if (userLoginDetails.Password === "") {
            setAlertPassword(true);
        } else {
            // -----condition check Password valide or not----//
            setAlertPassword(false);
            setAlertValidePassword(true);
        }
    };
    // -------forget password ------//
    const [forgetPasswordModal, setForgetPasswordModal] = useState(false);
    // ------set alert innput field is empty-----//
    const [alertForgetEmail, setAlertForgetEmail] = useState(false);
    const [alertForgetPassword, setAlertForgetPassword] = useState(false);
    const [alertForgetConfirmPassword, setAlertForgetConfirmPassword] =
        useState(false);
    // ------get email,new password values------//
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // ------check valide >>> email,new password values------//
    const [alertForgetValideEmail, setAlertForgetValideEmail] = useState(false);
    const [alertForgetValidePassword, setAlertForgetValidePassword] =
        useState(false);
    const [
        alertForgetValideConfirmPassword,
        setAlertForgetValideConfirmPassword,
    ] = useState("");
    //------- all values are valide then change password-------//
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [newPasswordSucceess, setNewPasswordSucceess] = useState(false);
    const [confirmPasswordSuccess, setConfirmPasswordSuccess] = useState(false);
    // -----set modal popup true------//
    const handleForgetPassword = () => {
        setForgetPasswordModal(true);
    };
    //   -----popup close-------//
    const closeModel = () => {
        setForgetPasswordModal(false);
        setEmail("");
        setNewPassword("");
        setConfirmPassword("");
        setAlertForgetEmail(false);
        setAlertForgetPassword(false);
        setAlertForgetConfirmPassword(false);
        setAlertForgetValideEmail(false);
        setAlertForgetValidePassword(false);
        setAlertForgetValideConfirmPassword(false);
    };
    useEffect(() => {
        if (emailSuccess && newPasswordSucceess && confirmPasswordSuccess) {
            alert("password changed success fully");
            setEmailSuccess(false);
            setNewPasswordSucceess(false);
            setConfirmPasswordSuccess(false);
            setEmail("");
            setNewPassword("");
            setConfirmPassword("");
            setForgetPasswordModal(false);
            setAlertForgetEmail(false);
            setAlertForgetPassword(false);
            setAlertForgetConfirmPassword(false);
            setAlertForgetValideEmail(false);
            setAlertForgetValidePassword(false);
            setAlertForgetValideConfirmPassword(false);
        }
    });
    // -----new password set-----//
    const handlePasswordChange = () => {
        if (email === "") {
            setAlertForgetEmail(true);
            setAlertForgetValideEmail(false);
        } else {
            setAlertForgetEmail(false);
            if (/\S+@\S+\.\S+/.test(email)) {
                setAlertForgetValideEmail(false);
                setEmailSuccess(true);
            } else {
                setAlertForgetValideEmail(true);
            }
        }
        if (newPassword === "") {
            setAlertForgetPassword(true);
            setAlertForgetValidePassword(false);
        } else {
            setAlertForgetPassword(false);
            if (newPassword.length < 8) {
                setAlertForgetValidePassword(true);
            } else if (!/(?=.*[0-9])(?=.*[a-z])/.test(newPassword)) {
                setAlertForgetValidePassword(true);
            } else {
                setAlertForgetValidePassword(false);
                setNewPasswordSucceess(true);
            }
        }
        if (confirmPassword === "") {
            setAlertForgetConfirmPassword(true);
            setAlertForgetValideConfirmPassword(false);
        } else {
            setAlertForgetConfirmPassword(false);
            if (newPassword === confirmPassword) {
                setAlertForgetValideConfirmPassword(false);
                setConfirmPasswordSuccess(true);
            } else {
                setAlertForgetValideConfirmPassword(true);
            }
        }
    };

    return (
        <div >
            <div>
                <Dropdown>
                    <Dropdown.Toggle
                        id="dropdown-basic"
                        style={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            backgroundColor: "black",
                            borderColor: "black",
                        }}
                    >
                        <i className="fa-solid fa-gear"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">User Login</Dropdown.Item>
                        <Dropdown.Item href="#/action-2"> Login</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div style={{ padding: "50px" }}>
                <Form
                    style={{
                        backgroundColor: "white",
                        width: "400px",
                        height: "400px",
                        fontFamily: "serif",
                    }}
                >
                    <div style={{ marginLeft: "190px" }}>
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <h3 style={{ marginLeft: "100px" }}>Shop Keeper Login</h3>
                    <Form.Group
                        className="mb-2"
                        controlId="formBasicEmail"
                        style={{ marginLeft: "30px" }}
                    >
                        <Form.Label>
                            <h5>Email :</h5>
                        </Form.Label>
                        <Form.Control
                            name="Email"
                            type="email"
                            placeholder="Email"
                            onChange={handleCatchValues}
                            style={{ width: "300px", height: "30px" }}
                        />
                        {alertEmail && (
                            <Form.Text
                                style={{ color: "red", width: "300px", height: "30px" }}
                            >
                                *Please fill in this field.
                            </Form.Text>
                        )}
                        {alertValideEmail && (
                            <Form.Text
                                style={{ color: "red", width: "300px", height: "30px" }}
                            >
                                *Email is Not register.
                            </Form.Text>
                        )}
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                        style={{ marginLeft: "30px" }}
                    >
                        <Form.Label>
                            <h5>Password:</h5>
                        </Form.Label>
                        <Form.Control
                            name="Password"
                            type="password"
                            placeholder="Password"
                            onChange={handleCatchValues}
                            style={{ width: "300px", height: "30px" }}
                        />
                        {alertPassword && (
                            <Form.Text
                                style={{ color: "red", width: "300px", height: "30px" }}
                            >
                                *Please fill in this field.
                            </Form.Text>
                        )}
                        {alertValidePassword && (
                            <Form.Text
                                style={{ color: "red", width: "300px", height: "30px" }}
                            >
                                *Password Not Match.
                            </Form.Text>
                        )}
                    </Form.Group>
                    <Form.Text
                        onClick={handleForgetPassword}
                        style={{
                            marginLeft: "235px",
                            color: "blue",
                            cursor: "pointer",
                            fontSize: "18px",
                            textDecorationLine: "underline",
                        }}
                    >
                        forget password?
                    </Form.Text>
                    <Button
                        variant="primary"
                        type="login"
                        style={{
                            width: "100px",
                            height: "40px",
                            marginLeft: "140px",
                            marginTop: "10px",
                        }}
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                    <Nav style={{ textDecorationLine: "underline" }}>
                        <Nav.Link href="/#" style={{ color: "blue", marginLeft: "20px" }}>
                            Back?
                        </Nav.Link>
                    </Nav>
                </Form>
                {forgetPasswordModal && (
                    <Modal
                        style={{ width: "500px", marginLeft: "500px" }}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={forgetPasswordModal}
                        onHide={closeModel}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Create New Password
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email :</Form.Label>
                                <Form.Control
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email"
                                />
                                {alertForgetEmail && (
                                    <Form.Text
                                        style={{ color: "red", width: "300px", height: "30px" }}
                                    >
                                        *Please fill in this field.
                                    </Form.Text>
                                )}
                                {alertForgetValideEmail && (
                                    <Form.Text
                                        style={{ color: "red", width: "300px", height: "30px" }}
                                    >
                                        *Enter Valide Email Address.
                                    </Form.Text>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>New Password :</Form.Label>
                                <Form.Control
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    type="password"
                                    placeholder="New Password"
                                />
                                {alertForgetPassword && (
                                    <Form.Text
                                        style={{ color: "red", width: "300px", height: "30px" }}
                                    >
                                        *Please fill in this field.
                                    </Form.Text>
                                )}
                                {alertForgetValidePassword && (
                                    <Form.Text style={{ color: "red" }}>
                                        *Your password should contain at least 8 character and
                                        contain character and number.
                                    </Form.Text>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Confirm Password :</Form.Label>
                                <Form.Control
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                                {alertForgetConfirmPassword && (
                                    <Form.Text
                                        style={{ color: "red", width: "300px", height: "30px" }}
                                    >
                                        *Please fill in this field.
                                    </Form.Text>
                                )}
                                {alertForgetValideConfirmPassword && (
                                    <Form.Text
                                        style={{ color: "red", width: "300px", height: "30px" }}
                                    >
                                        *Enter Correct password.
                                    </Form.Text>
                                )}
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="button" onClick={handlePasswordChange}>
                                Change Password
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )}
            </div>
        </div>
    );
};
export default ShopKeeperLogin;
