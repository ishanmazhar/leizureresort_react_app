import React, { Component } from 'react';
import { Jumbotron, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, 
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label} from 'reactstrap'; 
import { NavLink } from 'react-router-dom'; 

class LoginModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        console.log('modal open');
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + "Password: " + this.password.value 
            + " Remember: " + this.remember.chacked);
            event.preventDefault();
    }

    render() {
        return(
            <React.Fragment>
            <Button outline onClick={this.toggleModal}>
                <span className="fa fa-sign-in fa-lg"></span> Login
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
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
            </Modal>
            </React.Fragment>
        );
    }
}

export default LoginModal;