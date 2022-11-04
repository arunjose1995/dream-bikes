import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import "./UserHomePageBuy.css"
import { Button } from "react-bootstrap";
const UserHomePageBuy = () => {
    const [buyerDetails, setBuyerDetails] = useState({
        Name: "",
        Email: "",
        Bikemodal: "",
        DOB: "",
        Gender: "",
        Address: "",
        AadharNumber: "",
        BookingDate: "",
        District: "",
        State: "",
        phoneNumber: ""
      })
      

  const handleChange = (e) => {

    setBuyerDetails({
      ...buyerDetails,
      [e.target.name]: e.target.value,
    });
    console.log(buyerDetails);
 };


    const [buy, setBuy] = useState(false)
    const bookingNow = () => {
        setBuy(true)
    }
    const closeBtn = () => {
        setBuy(false)
    }

// //<---------send details for shop keeper--------->//
  const sendDetails=()=>{
//     const url = "http://localhost:5000/user/form/registration";
//     const UserData = {
    
//       Name:buyerDetails.Name ,
//       Mail_id:buyerDetails. Email,
//       Bikemodal: buyerDetails.Bikemodal,
//       Date_Of_Birth: buyerDetails.DOB,
//       Gender: buyerDetails.Gender,
//       Address: buyerDetails.Address,
//       Aadhar_Number: buyerDetails. AadharNumber,
//       Booking_Date: buyerDetails.BookingDate,
//       District: buyerDetails.District,
//       State: buyerDetails.State,
//       Phone_Number: buyerDetails.phoneNumber
//     };
//     axios.post(url,UserData).then(res =>console.log(res))
  
 }


    return (
        <div style={{ padding: "100px" }}>
            <div style={{ backgroundColor: "white", width: "900px", height: "750px" }}>
                <img style={{ backgroundColor: "bisque", width: "250px", height: "250px" }}></img>
                <div style={{ marginLeft: "50px" }}>
                    <h5>Modal name:<input style={{ border: "none" }} /></h5>
                    <h5 style={{ textDecorationLine: "underline" }}>Key specification:</h5>
                    <h5>Engine:<input style={{ border: "none" }} /></h5>
                    <h5>Power:<input style={{ border: "none" }} /></h5>
                    <h5>Torque:<input style={{ border: "none" }} /></h5>
                    <h5>Color<input style={{ border: "none" }} /></h5>
                    <h5>Tyre type:<input style={{ border: "none" }} /></h5>
                    <h5>Bracks:<input style={{ border: "none" }} /></h5>
                    <h5>Milleage:<input style={{ border: "none" }} /></h5>
                    <h5>Fuel Capacity:<input style={{ border: "none" }} /></h5>
                    <h5>Gear Box<input style={{ border: "none" }} /></h5>
                    <h5>Body Type<input style={{ border: "none" }} /></h5>
                    <h3>Model Price<input style={{ border: "none" }} /></h3>
                </div>
                <Row>
                    <Col>
                        <button style={{ width: "300px", backgroundColor: "green", marginLeft: "70px" }} onClick={bookingNow}>Booking now</button>
                    </Col>
                    <Col>
                        <button style={{ width: "300px", backgroundColor: "cyan" }}>Add to card</button>
                    </Col>
                </Row>

            </div>
            <Modal show={buy} onHide={false}  >
                <Modal.Header closeButton onClick={closeBtn} className="modalViewList">
                    <Modal.Title>Buyer Details</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalView">
                    <p>Name:<input style={{ width: "400px", border: "none", background: "white" }} name="Name" onChange={handleChange} /></p>

                    <p>Email:<input style={{ width: "400px", border: "none", background: "white" }} name="Email"  onChange={handleChange}  /></p>
                    <p>Bike Modal:<input style={{ width: "360px", border: "none", background: "white" }} name="Bikemodal"  onChange={handleChange}  /></p>


                    <p>DOB:<input style={{ width: "405px", border: "none", background: "white" }} name="DOB" onChange={handleChange} type="number"/></p>

                    <p>Gender:<input style={{ border: "none", background: "white", width: "385px" }} name="Gender" onChange={handleChange} /></p>
                    <p>address:<input style={{ width: "385px", border: "none", background: "white" }} name="Address" onChange={handleChange} /></p>

                    <p>Aadhar number:<input style={{ width: "330px", border: "none", background: "white" }} name="AadharNumber" onChange={handleChange} type="number"/></p>
                    <p>booking date:<input style={{ width: "34s0px", border: "none", background: "white" }} name="BookingDate" type="number" onChange={handleChange} /></p>
                    <Row>
                        <Col>
                            <p>District:<input style={{ width: "150px", border: "none", background: "white" }} name="District" onChange={handleChange} /></p>
                        </Col>
                        <Col>
                            <p>State:<input style={{ width: "160px", border: "none", background: "white" }} name="State" onChange={handleChange}  /></p>
                        </Col>
                    </Row>
                    <p>phone number:<input style={{ width: "340px", border: "none", background: "white" }} name="phoneNumber" type="number" onChange={handleChange} /></p>


                    <Row>
                        <Col>
                            <button style={{ backgroundColor: "red", marginLeft: "50px" }}>Download</button>
                        </Col>
                        <Col>
                            <button style={{ backgroundColor: "greenyellow" }} onClick={sendDetails}>send details</button>
                        </Col>
                    </Row>
                </Modal.Body>

            </Modal>
        </div>
    )
}
export default UserHomePageBuy;



