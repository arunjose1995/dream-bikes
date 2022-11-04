import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./UserHomePage.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
const UserHomePage = () => {
    const [getData,setGetData]=useState([])
    console.log(getData);

    const navigater = useNavigate();

    const viewBike = () => {

        navigater("/userHomePageBuy")
}

useEffect(()=>{

    const GetUrl="http://localhost:5000/user/get/postdata"
    axios.get(GetUrl)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
},[])
  



    return (
        <div className='first'>
            <Navbar bg="light" expand="lg">
                <Nav >
                    <img src={require('./bike.png')} alt='not found' style={{ width: "50px", height: "50px", borderRadius: "100px", backgroundColor: "chartreuse" }} className="col-1"></img>

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
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1"><Button><i class="fa-sharp fa-solid fa-heart"></i></Button></Nav.Link>
                        <Nav.Link href="#action2">My order</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div >
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('./Image1.jpeg')}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('./Image2.png')}
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('./Image3.png')}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

            </div>
            <div>
                <Row style={{ padding: "50px" }}>
                    <Col xs={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require('./Image4.webp')} />
                            <Card.Body>
                                <Card.Title>PULSOR</Card.Title>

                                <Button variant="primary" onClick={viewBike}> view</Button>
                            </Card.Body>
                        </Card>
                    </Col>
               
                </Row>

            </div>
        </div>

    );

}
export default UserHomePage