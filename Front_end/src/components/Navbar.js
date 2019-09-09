import React from 'react'
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';


class Menu extends React.Component {
    render() {
        return <Navbar bg="light" expand="lg">
        <Navbar.Brand href="http://tecsky.net">Tecsky</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Iniciar Sesión</Nav.Link>
                <NavDropdown title="Servicios" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Internet</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Cableado Estructurado</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Camaras</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
    }
}
export default Menu