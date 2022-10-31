import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import './AdminLogin.css'

const AdminLogin = () => {
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
  }, [emailSuccess, newPasswordSucceess, confirmPasswordSuccess]);
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
<Card className="form-card">
<Form.Group className="LoginIcon" style={{ textAlign: "center" }}>
  <i className="fs-3 mt-4 fa-solid fa-lock"></i>
  <Card.Title as="h2" className="mt-1" style={{fontWeight:'800'}}>
    Admin Login
  </Card.Title>
</Form.Group>

<Card.Body>
  <Form>
    <Form.Group className="mb-3">
      <Form.Label className="text-light">Email address :</Form.Label>
      <Form.Control
        className="text-dark"
        name="Email"
        type="email"
        placeholder="Email"
        onChange={handleCatchValues}
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

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className="text-light">Password :</Form.Label>
      <Form.Control
        className="text-dark"
        name="Password"
        type="password"
        placeholder="Password"
        onChange={handleCatchValues}
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

    <Form.Group className="mb-2 d-flex justify-content-end">
      <Button
        className="text-info"
        style={{
          textTransform: "lowercase",
          textDecorationLine: "underline",
        }}
        type="button"
        onClick={handleForgetPassword}
      >
        forget password?
      </Button>
    </Form.Group>
    <Form.Group className="text-light mb-2 d-flex justify-content-center">
      <Button onClick={handleLogin} variant="contained" type="button">
        Submit
      </Button>
    </Form.Group>

  </Form>
  {forgetPasswordModal && (
<Modal
style={{ width: "450px", marginLeft: "500px" }}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
show={forgetPasswordModal}
onHide={closeModel}
backdrop="static"
keyboard={false}
>
<Modal.Header className="modal-head" closeButton>
  <Modal.Title id="contained-modal-title-vcenter">
    Create New Password
  </Modal.Title>
</Modal.Header>
<Modal.Body className="modal-body">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email :</Form.Label>
    <Form.Control
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      placeholder="Email"
    />
    {alertForgetEmail && (
      <Form.Text
        style={{
          color: "red",
          width: "300px",
          height: "30px",
        }}
      >
        *Please fill in this field.
      </Form.Text>
    )}
    {alertForgetValideEmail && (
      <Form.Text
        style={{
          color: "red",
          width: "300px",
          height: "30px",
        }}
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
        style={{
          color: "red",
          width: "300px",
          height: "30px",
        }}
      >
        *Please fill in this field.
      </Form.Text>
    )}
    {alertForgetValidePassword && (
      <Form.Text style={{ color: "red" }}>
        *Your password should contain at least 8 character and contain
        character and number.
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
        style={{
          color: "red",
          width: "300px",
          height: "30px",
        }}
      >
        *Please fill in this field.
      </Form.Text>
    )}
    {alertForgetValideConfirmPassword && (
      <Form.Text
        style={{
          color: "red",
          width: "300px",
          height: "30px",
        }}
      >
        *Enter Correct password.
      </Form.Text>
    )}
  </Form.Group>
</Modal.Body>
<Modal.Footer className="modal-foot">
  <Button
    variant="contained"
    type="button"
    onClick={handlePasswordChange}
  >
    Change Password
  </Button>
</Modal.Footer>
</Modal>
)}
</Card.Body>

</Card>
  )
    }
export default AdminLogin