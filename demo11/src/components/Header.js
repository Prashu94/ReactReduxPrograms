import React from "react"
import {Link, Navigate, Routes, Route} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Card from "./Card";
import EditEmployee from "./EmployeeEdit";
class Header extends React.Component{
    render = () => {
        return(
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand><Link to = "/card">HR System</Link></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link><Link to = "/card">Home</Link></Nav.Link>
                            <Nav.Link><Link to = "/edit">Employee Details</Link></Nav.Link>
                            <Nav.Link><Link to = "/add">Add Employee</Link></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <br/>
                <Routes>
                    <Route exact path = "/" element = {<Navigate to ="/card"/>}/>
                    <Route path = "/card" element = {<Card/>}/>
                    <Route path = "/edit/:id" element = {<EditEmployee/>}/>
                </Routes>
            </>
        );
    }
}

export default Header;