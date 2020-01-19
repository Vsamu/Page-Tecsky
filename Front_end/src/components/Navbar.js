import React from 'react'
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';


class Menu extends React.Component {
    state = {};
    handleChange = (e) => {    
        this.setState({
         [e.target.name]: e.target.value,
         });      
     }    
     //metodo que realiza eventos, para el button
     handleClick = (e) => {
         console.log(this.state);
 
     }
     //previene el onSubmit por default del form
     handleSubmit = (e) => {
         e.preventDefault();
         console.log("form was stoped")
         
     }

    render() {
        return <Navbar bg="light" expand="lg">
        <Navbar.Brand href="http://tecsky.net">Photos Condor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">                
                <NavDropdown title="Servicios" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Add Photos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Delete Photos</NavDropdown.Item>        
                    <NavDropdown.Divider />                    
                </NavDropdown>
            </Nav>
            <Form inline onSubmit={this.handleSubmit}>
                <FormControl type="text" onChange={this.handleChange} placeholder="Search" className="mr-sm-2" name="search"  />
                <Button variant="outline-success" onClick={this.handleClick}>Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
    }
}
export default Menu