import "./AdminHomePage.css"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';



const AdminHomePage = () => {
    return (
        <div>
           
            <Navbar expand="lg" variant="light" bg="light">
        <div></div>
                <Container>
                    <Navbar.Brand href="#">A2P</Navbar.Brand>
                    <input placeholder="search"></input>
                    <Button>Search</Button>
                    <button><i class="fa-solid fa-circle-heart"></i></button>
                    <Button style={{justifyContent:"end"}}>My orders</Button>
                </Container>
            </Navbar>
            <button>anitha</button>
        </div>
    )
}
export default AdminHomePage