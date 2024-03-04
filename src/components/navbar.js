import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const CustomNavbar = () => {
  const navbarStyle = {
    backgroundColor: 'rgba(76, 53, 219, 1)', // #4C35DB with 100% opacity
    marginRight: "100px"
  };

  const brandStyle = {
    marginRight: '120px', // Adjust the margin as needed
  };
  const NavStyle = {
    marginRight: '20px', // Adjust the margin as needed
  };
  const Style = {
    marginRight: '30px', // Adjust the margin as needed
  };

  const colours={
    Color: "white",
  }

  
  const contactBoxStyle = {
    backgroundColor: 'white',
    padding: '10px 16px', // Adjust the padding as needed
    borderRadius: '4px', // Optional: Add border-radius for rounded corners
    color: 'black',
    fontWeight: 'bold',
  
  };
  const contactBoxStyles = {
    backgroundColor: 'rgba(76, 53, 219, 1)',
    padding: '12px 12px', // Adjust the padding as needed
    borderRadius: '4px', // Optional: Add border-radius for rounded corners
    color: 'black',
    borderColor: 'white',
    border: '2px solid white', // White border
    fontWeight: 'bold',
  };
  
  const navLinkStyle = {
    marginRight: '200px', // Adjust the margin between nav links as needed
  };

  return (
    <Navbar expand="lg" style={navbarStyle}>
      <div className="container-fluid">
        <div style={colours}>
        <Navbar.Brand href="#" style={brandStyle}  >Powerpro</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="navbar-nav" style={navLinkStyle}>
           <div style={NavStyle}>
                   
            <Nav.Link href="src\pages\home.js">Home</Nav.Link>
            </div> 
            <div style={NavStyle}>
            <Nav.Link href="#">About</Nav.Link></div>
           
           
            <div style={NavStyle}>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Product 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Product 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Product 3</NavDropdown.Item>
            </NavDropdown></div>
           
           
            <div style={NavStyle}>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Resource 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Resource 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Resource 3</NavDropdown.Item>
            </NavDropdown></div>
           
           
           
            <div style={NavStyle}>
            <NavDropdown title="Tools" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Tool 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Tool 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Tool 3</NavDropdown.Item>
            </NavDropdown></div>
          </Nav>
          
          <Nav>
          <div style={Style}>
  <Nav  style={contactBoxStyles}>
    <Nav.Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Sign In
    </Nav.Link>
  </Nav>
</div>

            <div>
            <Nav.Link style={contactBoxStyle} href="#">Contact Us</Nav.Link>
            </div>
          </Nav>
          
  
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
