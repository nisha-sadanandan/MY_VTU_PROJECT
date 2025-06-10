import React from "react"
import{ Navbar,Nav,NavDropdown,Container,Image} from "react-bootstrap"

const Header = () =>{

     return(
        <div>
        <Navbar className="navbar-style" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <Image className="logo-img-style" src="images/logo.jpg" alt="vtu" roundedCircle />
                    <h6 className="logo-text-style">Visvesvaraya Technological University</h6>
                </Navbar.Brand>

                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Abou Us</Nav.Link>
                        <NavDropdown title="Academic" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Admission</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Circulars & Notification</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Certificate Issued</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Examination" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Examination Guidline</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Examination Application</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Results</NavDropdown.Item>
                        </NavDropdown>
                         <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Civil Engineering</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Computer Application Engineering</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Electrical & Communication Engineering</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Staff Login" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Login as Admin</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
            </Container>

        </Navbar>
        </div>

     )     
    
}

export default Header