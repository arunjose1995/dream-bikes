import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';



const AdminHomePage = () => {
  const [slideBar,setSlideBar]=useState(false)

const handleSlideBar =()=>{
  
  setSlideBar((s) => !s)

}
  return (
    <>
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand className="ms-3">
        <Button onClick={handleSlideBar}>
          {" "}
          <i className="fa-solid fa-house"></i>{" "}
        </Button>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>Bike Online Booking App</Nav.Link>
        </Nav>
        <Form className="d-flex me-2">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="success">Search</Button>
        </Form>
        <Nav>
          <Nav.Link>
            {" "}
            <Button>Add New Bike</Button>{" "}
          </Nav.Link>
          <Nav.Link className="me-2">
            <Button>
              {" "}
              <i className="fa-solid fa-gear"></i>
            </Button>
          </Nav.Link>
        </Nav>
     
      </Navbar.Collapse>
      
    </Navbar>
       <Offcanvas show={slideBar} onHide={()=>setSlideBar(false)}
       scroll={true}
       style={{width:'300px'}}
       backdrop= {true}
     >
           <Offcanvas.Header closeButton className="bg-info">
             <Offcanvas.Title >Menu</Offcanvas.Title>
           </Offcanvas.Header>
           <Offcanvas.Body className="bg-dark">
           <ListGroup >
      <ListGroup.Item className="mb-2 bg-dark text-light" as="button" >
      Home
      </ListGroup.Item>
      <ListGroup.Item className=" mb-2 bg-dark text-light" as="button">Number Of Bikes</ListGroup.Item>
      <ListGroup.Item className="mb-2  bg-dark text-light" as="button">
        Setting
      </ListGroup.Item>
      <ListGroup.Item className=" mb-2 bg-dark text-light" as="button">About</ListGroup.Item>
    </ListGroup>
            

          
           </Offcanvas.Body>
         </Offcanvas>
         </>
    
  );
};
export default AdminHomePage;
