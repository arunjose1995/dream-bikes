import React, { useContext, useEffect, useState,useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UserContext from "../../Context/ContextCreate";
import {useReactToPrint} from 'react-to-print'

const UserHomePageBuy = () => {
  const [LoginId, setLoginId] = useContext(UserContext);
  console.log(LoginId);
  const { id } = useParams();
  const [getData, setGetData] = useState([]);

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
    phoneNumber: "",
  });
  console.log(buyerDetails);

  const handleChange = (e) => {
    setBuyerDetails({
      ...buyerDetails,
      [e.target.name]: e.target.value,
    });
    console.log(buyerDetails);
  };

  const [buy, setBuy] = useState(false);
  const bookingNow = () => {
    setBuy(true);
  };
  const closeBtn = () => {
    setBuy(false);
  };

  // //<---------send details for shop keeper--------->//
  const sendDetails = () => {
    const BookingUrl = "http://localhost:5000/user/BookingForm";
    const UserData = {
      Name: buyerDetails.Name,
      Date_of_Birth: buyerDetails.DOB,
      Mail_id: buyerDetails.Email,
      Bikemodel: buyerDetails.Bikemodal,
      Gender: buyerDetails.Gender,
      Address: buyerDetails.Address,
      Aadhar_Number: buyerDetails.AadharNumber,
      Booking_Date: buyerDetails.BookingDate,
      District: buyerDetails.District,
      State: buyerDetails.State,
      Phone_Number: buyerDetails.phoneNumber,
      City:"Coimbatore"
    };
    if (
      buyerDetails.Name !== "" &&
      buyerDetails.Email !== "" &&
      buyerDetails.Bikemodal !== "" &&
      buyerDetails.DOB !== "" &&
      buyerDetails.Gender !== "" &&
      buyerDetails.Address !== "" &&
      buyerDetails.AadharNumber !== "" &&
      buyerDetails.BookingDate !== "" &&
      buyerDetails.District !== "" &&
      buyerDetails.State !== "" &&
      buyerDetails.phoneNumber !== ""
    ) {
      if (
        /(^[a-z][a-z$#!&0-9]*)[@]([a-z,0-9]*)[.]([a-z]{2,3})$/.test(
          buyerDetails.Email
        )
      ) {
        if (buyerDetails.phoneNumber.length === 10) {

        
        
            {getData.map((item, index) => {
                console.log(index, id);
                if (id == index) {
                    const FormBooking= {
                        userId:LoginId,
                        productId:item._id,
                       Booking: [UserData]
                      } 
                          axios.post(BookingUrl, FormBooking).then((res) => console.log(res))
          .catch(err=>console.log(err))
                      return null
                }})}
              
        //   axios.post(BookingUrl, FormBooking).then((res) => console.log(res))
        //   .catch(err=>console.log(err))
        } else {
          alert("enter valide password");
        }
      } else {
        alert("entervalide email");
      }
    } else {
      alert("please type all fields");
    }
  };

  const addCard = (cardId) => {
    const GetUrl = "http://localhost:5000/user/addtocart";
    const addtocart = {
      userId: LoginId,
      productId: cardId,
    };
    axios
      .post(GetUrl, addtocart)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const GetUrl = "http://localhost:5000/user/get/postdata";
    axios
      .get(GetUrl)
      .then((res) => setGetData(res.data))
      .catch((err) => console.log(err));
  }, []);


//   ---downloading-----///
const componentRef=useRef();
const handlePrint=useReactToPrint({content:()=>componentRef.current
})
  return (
    <div style={{ padding: "100px" }}>
      {getData.map((item, index) => {
        console.log(index, id);
        if (id == index) {
          console.log(item);
          return (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                width: "900px",
                height: "750px",
              }}
            >
              <img
                src="https://www.joyebike.com/product/beast/images/banner-img-mobile.png"
                style={{
                  backgroundColor: "bisque",
                  width: "250px",
                  height: "250px",
                }}
              ></img>
              <div style={{ marginLeft: "50px" }}>
                <h5>
                  Modal name:{" "}
                  <input value={item.Model_Name} style={{ border: "none" }} />
                </h5>
                <h5 style={{ textDecorationLine: "underline" }}>
                  Key specification:
                </h5>
                <h5>
                  Engine:
                  <input value={item.Engine} style={{ border: "none" }} />
                </h5>
                <h5>
                  Power:
                  <input value={item.Power} style={{ border: "none" }} />
                </h5>
                <h5>
                  Torque:
                  <input value={item.Torque} style={{ border: "none" }} />
                </h5>
                <h5>
                  Color
                  <input value={item.Color} style={{ border: "none" }} />
                </h5>
                <h5>
                  Tyre type:
                  <input value={item.Tyre_type} style={{ border: "none" }} />
                </h5>
                <h5>
                  Bracks:
                  <input value={item.Bracks} style={{ border: "none" }} />
                </h5>
                <h5>
                  Milleage:
                  <input value={item.Milleage} style={{ border: "none" }} />
                </h5>
                <h5>
                  Fuel Capacity:
                  <input
                    value={item.Fuel_Capacity}
                    style={{ border: "none" }}
                  />
                </h5>
                <h5>
                  Gear Box
                  <input value={item.Gear_Box} style={{ border: "none" }} />
                </h5>
                <h5>
                  Body Type
                  <input value={item.Body_Type} style={{ border: "none" }} />
                </h5>
                <h3>
                  Model Price
                  <input value={item.Model_Price} style={{ border: "none" }} />
                </h3>
              </div>
              <Row>
                <Col>
                  <button
                    style={{
                      width: "300px",
                      backgroundColor: "green",
                      marginLeft: "70px",
                    }}
                    onClick={() => bookingNow(id)}
                  >
                    Booking now
                  </button>
                </Col>
                <Col>
                  <button
                    onClick={() => addCard(item._id)}
                    style={{ width: "300px", backgroundColor: "cyan" }}
                  >
                    Add to card
                  </button>
                </Col>
              </Row>
            </div>
          );
        }
      })}

      <Modal show={buy} onHide={false}>
        <Modal.Header closeButton onClick={closeBtn} className="modalViewList">
          <Modal.Title>Buyer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalView">
            <div ref={componentRef}>
          <p>
            Name:
            <input
              style={{ width: "400px", border: "none", background: "white" }}
              name="Name"
              onChange={handleChange}
            />
          </p>

          <p>
            Email:
            <input
              style={{ width: "400px", border: "none", background: "white" }}
              name="Email"
              onChange={handleChange}
            />
          </p>
          <p>
            Bike Modal:
            <input
              style={{ width: "360px", border: "none", background: "white" }}
              name="Bikemodal"
              onChange={handleChange}
            />
          </p>

          <p>
            DOB:
            <input
              style={{ width: "405px", border: "none", background: "white" }}
              name="DOB"
              onChange={handleChange}
              type="text"
            />
          </p>

          <p>
            Gender:
            <input
              style={{ border: "none", background: "white", width: "385px" }}
              name="Gender"
              onChange={handleChange}
            />
          </p>
          <p>
            address:
            <input
              style={{ width: "385px", border: "none", background: "white" }}
              name="Address"
              onChange={handleChange}
            />
          </p>

          <p>
            Aadhar number:
            <input
              style={{ width: "330px", border: "none", background: "white" }}
              name="AadharNumber"
              onChange={handleChange}
              type="number"
            />
          </p>
          <p>
            booking date:
            <input
              style={{ width: "34s0px", border: "none", background: "white" }}
              name="BookingDate"
              type="text"
              onChange={handleChange}
            />
          </p>
          <Row>
            <Col>
              <p>
                District:
                <input
                  style={{
                    width: "150px",
                    border: "none",
                    background: "white",
                  }}
                  name="District"
                  onChange={handleChange}
                />
              </p>
            </Col>
            <Col>
              <p>
                State:
                <input
                  style={{
                    width: "160px",
                    border: "none",
                    background: "white",
                  }}
                  name="State"
                  onChange={handleChange}
                />
              </p>
            </Col>
          </Row>
          <p>
            phone number:
            <input
              style={{ width: "340px", border: "none", background: "white" }}
              name="phoneNumber"
              type="number"
              onChange={handleChange}
            />
          </p>
          </div>

          <Row>
            <Col>
              <button onClick={handlePrint} style={{ backgroundColor: "red", marginLeft: "50px" }}>
                Download
              </button>
            </Col>
            <Col>
              <button
                style={{ backgroundColor: "greenyellow" }}
                onClick={sendDetails}
              >
                send details
              </button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default UserHomePageBuy;