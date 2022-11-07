// import Carousel from "react-bootstrap/Carousel";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { Container } from "react-bootstrap";
// import { useNavigate, useParams } from "react-router-dom";
// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import UserContext from "../../Context/ContextCreate";
// const UserHomePage = () => {
//   const [getData, setGetData] = useState([]);
//   console.log(getData);

//   const [LoginId, setLoginId]=useContext(UserContext)
//   const {id}=useParams()
//   setLoginId(id)
//   const navigater = useNavigate();

//   const viewBike = (index) => {
//     // const value={
//     //     ProductID:index,
//     //     LoginId:id
//     // }
//     navigater(`/userHomePageBuy/${index}`);
//   };

//   useEffect(() => {
//     const GetUrl = "http://localhost:5000/user/get/postdata";
//     axios
//       .get(GetUrl)
//       .then((res) => setGetData(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="first">
//       <Navbar bg="light" expand="lg">
//         <Nav>
//           <img
//             src="https://www.joyebike.com/product/beast/images/banner-img-mobile.png"
//             alt="not found"
//             style={{
//               width: "50px",
//               height: "50px",
//               borderRadius: "100px",
//               backgroundColor: "chartreuse",
//             }}
//             className="col-1"
//           ></img>
//         </Nav>
//         <Container fluid>
//           <Navbar.Brand href="#">A2P</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />

//           <Navbar.Collapse id="navbarScroll">
//             <Form className="d-flex" style={{ width: "800px" }}>
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               />
//               <Button variant="outline-success">Search</Button>
//             </Form>
//           </Navbar.Collapse>

//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">
//               <Button>
//                 <i class="fa-sharp fa-solid fa-heart"></i>
//               </Button>
//             </Nav.Link>
//             <Nav.Link href="#action2">My order</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <div>
//         <Carousel>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={require('./Image1.jpeg')}
//               alt="First slide"
//             />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={require('./Image2.png')}
//               alt="Second slide"
//             />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={require('./Image3.png')}
//               alt="Third slide"
//             />
//           </Carousel.Item>
//         </Carousel>
//       </div>
      
//         <Row style={{ padding: "50px" }}>
//           {getData.map((item, index) => {
//             return (
//                 <Col xs={4}>

//                 <Card style={{ width: "18rem" ,marginTop:"50px"}}>
//                   <Card.Img
//                     variant="top"
//                     src="https://www.joyebike.com/product/beast/images/banner-img-mobile.png"
//                   />
//                   <Card.Body>
//                     <Card.Title>{item.Model_Name}</Card.Title>
  
//                     <Button variant="primary" onClick={()=>viewBike(index)}>
//                       {" "}
//                       view
//                     </Button>
//                   </Card.Body>
//                 </Card>
//               </Col>

//             )
          
//           })}
//         </Row>
     
//     </div>
//   );
// };
// export default UserHomePage;

import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import UserContext from "../../Context/ContextCreate";
const UserHomePage = () => {
  const [getData, setGetData] = useState([]);
  console.log(getData);
  const[myorder,setMyOrder]=useState(false)
  const [myOrderData,setMyOrderData]=useState([])
  const [LoginId, setLoginId]=useContext(UserContext)
  const {id}=useParams()
  setLoginId(id)
  const navigater = useNavigate();
  const viewBike = (index) => {
    // const value={
    //     ProductID:index,
    //     LoginId:id
    // }
    navigater(`/userHomePageBuy/${index}`);
  };
  useEffect(() => {
    const GetMyOrder=`http://localhost:5000/user/addcart/data/${LoginId}`
    const GetUrl = "http://localhost:5000/user/get/postdata";
    axios
      .get(GetUrl)
      .then((res) => setGetData(res.data))
      .catch((err) => console.log(err));
      axios
      .get(GetMyOrder)
      .then((res) => setMyOrderData(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  const MyOrder =()=> {
setMyOrder(true)
  }
  return (
    <>
    {!myorder && ( <div className="first">
      <Navbar bg="light" expand="lg">
        <Nav>
          <img
            src="https://www.joyebike.com/product/beast/images/banner-img-mobile.png"
            alt="not found"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "100px",
              backgroundColor: "chartreuse",
            }}
            className="col-1"
          ></img>
        </Nav>
        <Container fluid>
          <Navbar.Brand href="#">A2P</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex" style={{ width: "800px" }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <Button>
                <i class="fa-sharp fa-solid fa-heart"></i>
              </Button>
            </Nav.Link>
            <Nav.Link onClick={MyOrder}>My order</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.joyebike.com/product/beast/images/banner-img-mobile.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.joyebike.com/product/beast/images/banner-img-mobile.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.joyebike.com/product/beast/images/banner-img-mobile.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
        <Row style={{ padding: "50px" }}>
          {getData.map((item, index) => {
            return (
                <Col xs={4}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://www.joyebike.com/product/beast/images/banner-img-mobile.png"
                  />
                  <Card.Body>
                    <Card.Title>{item.Model_Name}</Card.Title>
                    <Button variant="primary" onClick={()=>viewBike(index)}>
                      {" "}
                      view
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
    </div>)}
   {myorder && (<div className="row gap-3">
          {myOrderData.map((data, index) => {
            return (
              <Card
                className="body-content"
                key={index}
                style={{ width: "18rem" }}
              >
                <Card.Img
                  style={{
                    margin: "auto",
                    marginTop: "5px",
                    height: "200px",
                    width: "250px",
                  }}
                  src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    {data.Model_Name}
                    <DropdownButton
                      variant="link"
                      drop="end"
                      title={<i className="fa-solid fa-gear"></i>}
                    >
                      <Dropdown.Item
                        // onClick={() => EditBike(index)}
                        as="button"
                      >
                        <i className="fa-solid fa-pen-to-square"></i> Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        // onClick={() => DeleteBike(data._id)}
                        as="button"
                      >
                        <i className="fa-solid fa-trash"></i> Delete
                      </Dropdown.Item>
                      <Dropdown.Item as="button">
                        <i className="fa-solid fa-circle-left"></i> Cancel
                      </Dropdown.Item>
                    </DropdownButton>
                  </Card.Title>
                  <Card.Text>
                    Modal Price : {data.Model_Price}
                    <br />
                    Color : {data.Color} <br />
                    Body Type : {data.Body_Type}
                    <br />
                    <Card.Link
                      style={{ cursor: "pointer" }}
                      // onClick={() => MoreDetails(index)}
                    >
                      MoreInfo...
                    </Card.Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>)}
    </>
  );
};
export default UserHomePage;