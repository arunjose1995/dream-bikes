import Table from 'react-bootstrap/Table';
import "/home/anitha/dream-bikes/frontend/src/components/Home /ShopKeeperHomePage/ShopKeeperHomePage.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


const ShopKeeperHomePage = () => {
    const [form, setForm] = useState(false)
    const [value, setValue] = useState({
        OrderStatus: "",
        DeliveryDate: ""
    }
    )
    const HandilValue = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    const [OrderStatus, setOrderStatus] = useState(false)
    const [DeliveryDate, setDeliveryDate] = useState(false)
    const [bottomReply, setBottomReply] = useState(false)

    const view = () => {
        setForm(true)
    }
    const closeBtn = () => {
        setForm(false)
    }

    const ReplyIt = (e) => {
        e.preventDefault();
        if (value.OrderStatus === "") {
            setOrderStatus(true)
        }
        else {
            setOrderStatus(false)
        }
        if (value.DeliveryDate === "") {
            setDeliveryDate(true)
        }
        else {
            setDeliveryDate(false)
        }
    }

    const BottomReply = () => {
        setBottomReply(true)
    }

    return (
        <>
            <Navbar style={{ backgroundColor: "white" }} >
                <Nav >
                    <img src={require('../Userhomepage/bike.png')} alt='not found' style={{ width: "50px", height: "50px", borderRadius: "100px", backgroundColor: "chartreuse" }} className="col-1"></img>
                    <h1 style={{ marginLeft: "450px" }}>Shop Keeper</h1>
                </Nav>
            </Navbar>
            <Row>
                <Col xs={2} >
                    <div variant="light" style={{ backgroundColor: "white", height: "500px" }} >fcgvbhj</div>
                </Col>
                <Col>
                    <Row>

                    </Row>
                    <Row>
                        <Table striped bordered hover size="sm" style={{ backgroundColor: "white", marginTop: "50px", width: "700px", marginLeft: "100px" }}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Buyer Name</th>
                                    <th>view details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td> <Button variant="info" onClick={view}>View</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Col>
            </Row>
            <Modal show={form} onHide={false}  >
                <Modal.Header closeButton onClick={closeBtn} className="modalViewList">
                    <Modal.Title>Buyer Details</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalView">
                    <p>Name:<input style={{ width: "400px", border: "none", background: "none" }} /></p>

                    <p>Email:<input style={{ width: "400px", border: "none", background: "none" }} /></p>
                    <p>Bike Modal:<input style={{ width: "350px", border: "none", background: "none" }} /></p>
                 

                            <p>DOB:<input style={{ width: "160px", border: "none", background: "none" }} /></p>
                      
                    <p>Gender:<input style={{ border: "none", background: "none" }} /></p>
                    <p>address:<input style={{ width: "385px", border: "none", background: "none" }} /></p>

                    <p>Aadhar number:<input style={{ width: "330px", border: "none", background: "none" }} /></p>
                    <p>booking date:<input style={{ width: "34s0px", border: "none", background: "none" }} /></p>
                    <Row>
                        <Col>
                            <p>District:<input style={{ width: "150px", border: "none", background: "none" }} /></p>
                        </Col>
                        <Col>
                            <p>State:<input style={{ width: "160px", border: "none", background: "none" }} /></p>
                        </Col>
                    </Row>
                    <p>phone number:<input style={{ width: "340px", border: "none", background: "none" }} /></p>
                 
                    <div style={{ textAlign: "end" }}>
                        <Button onClick={BottomReply}>Reply</Button>
                    </div>
                </Modal.Body>
                {bottomReply && (<div style={{ backgroundColor: "yellow", borderColor: "black" }} className="modalViewList1">
                    <div>
                        <Modal.Title>Reply</Modal.Title>
                        <p>Order Status:<input style={{ width: "350px" }} onChange={HandilValue} />
                            {OrderStatus && (<Form.Text style={{ color: "red", width: "300px", height: "30px", marginLeft: "100px" }}>
                                *Please fill in this field.
                            </Form.Text>)}
                        </p>
                        <p>Delivery Date:<input style={{ width: "345px" }} onChange={HandilValue} />
                            {DeliveryDate && (<Form.Text style={{ color: "red", width: "300px", height: "30px", marginLeft: "100px" }}  >
                                *Please fill in this field.
                            </Form.Text>)}
                        </p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <Button variant='success' onClick={ReplyIt} style={{ width: "200px" }} > Send Reply</Button>
                    </div>
                </div>)}

            </Modal>
        </>
    )
}
export default ShopKeeperHomePage;