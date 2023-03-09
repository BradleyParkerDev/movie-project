import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    
    
    let expand = false;
    
    
    return (
        // <div>
        //     <Link to="/">HomePage</Link>
        //     <Link to="/MovieListPage">MovieListPage</Link>
        //     <Link to="/MoviePage">MoviePage</Link>
        // </div>


<div className = "App-header">

        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Movie-Project</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Movie-Project
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">HomePage</Nav.Link>
                  <Nav.Link href="/MovieListPage">MovieListPage</Nav.Link>
                  <Nav.Link href="/MoviePage">MoviePage</Nav.Link>
                </Nav> 
      
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
</div>

    )
}
export default NavBar