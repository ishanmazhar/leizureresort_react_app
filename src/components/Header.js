import React, { Component } from 'react';
import { Jumbotron, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, 
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label} from 'reactstrap'; 
import { NavLink } from 'react-router-dom';
import LoginModal from './LoginModal'; 

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        // this.toggleModal = this.toggleModal.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    // toggleModal() {
    //     this.setState({
    //         isModalOpen: !this.state.isModalOpen
    //     });
    // }

    // handleLogin(event) {
    //     this.toggleModal();
    //     alert("Username: " + this.username.value + "Password: " + this.password.value 
    //         + " Remember: " + this.remember.chacked);
    //         event.preventDefault();
    // }


    render() {
        return(
            // Long form of <>: <React.Fragment>
            <React.Fragment> 
                <Navbar dark expand = "md">
                    <div className="container">
                        <NavbarToggler onClick = {this.toggleNav} /> 
                        <NavbarBrand className="mr-auto">
                            <NavLink to = "/home">Leizure</NavLink>
                        </NavbarBrand>
                        <Collapse isOpen = {this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to = "/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to = "/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to = "/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to = "/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <LoginModal isLoggedIn={this.props.isLoggedIn} />  
                                </NavItem>
                            </Nav>
                         </Collapse>
                    </div>
                </Navbar>
                {/* <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Leizure Beach Resort</h1>
                                <p> Leizure Beach Resort is located on Inani beach, Cox's Bazar with lush 
                                    green hills rise from the east and endless sea stretching on the west, the 
                                    resort offers panoramic visuals of Bay of Bengal. Nestled in the heart of 
                                    nature along the world’s longest natural sandy beach, the resort is spread 
                                    over 15 acres, located 40 minutes away from the hustle of the Cox's Bazar 
                                    city with easy accessibility to all the major tourist. </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron> */}
                {/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal} style={{backgroundColor: "#07055a", color: "burlywood"}}>Login</ModalHeader>
                    <ModalBody style={{backgroundColor: "#47c6ec"}}>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input} />
                                    Remember Me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal> */}
            </React.Fragment>
        );
    }
}

export default Header