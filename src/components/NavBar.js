import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Login from "./googleLogin";
import "font-awesome/css/font-awesome.min.css";

class NavBar extends React.Component {
  render(onClick = () => alert("Please Login with Google")) {
    return (
      <Navbar bg="light-green" expand="lg">
        <Navbar.Brand href="./">
          <img
            alt="logo"
            src="https://res.cloudinary.com/undercover/image/upload/v1586194287/VGG-Udemy_clone/logo_xiojdz.png"
            width="50px"
          />
          Udemy-Clone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search for Courses"
              className="ml-sm-2 bg-light-gray bn"
            />
            <Button variant="outline-success">
              <i className="fa fa-search fa-search"></i>
            </Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link onClick={onClick}>Teach on Udemy</Nav.Link>
            <Nav.Link href="#link">
              <i className="fa fa-heart fa-heart" style={{color:"red"}}></i>
            </Nav.Link>

            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="#"> HTML & CSS</NavDropdown.Item>
              <NavDropdown.Item href="#"> SASS</NavDropdown.Item>
              <NavDropdown.Item href="#"> JavaScript</NavDropdown.Item>
              <NavDropdown.Item href="#">PHP</NavDropdown.Item>
              <NavDropdown.Item href="#">Python</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#"> Explore More</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link  className="bg-light-red ba " href="/login">Login with Google</Nav.Link> */}
            <Login title="Login as student" isStudent={true} />
            <Login title="Login as Teacher" isStudent={false} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
