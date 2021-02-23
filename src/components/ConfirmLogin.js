import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'; 
import LoginModal from './LoginModal'; 

class ConfirmLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        return(
            <React.Fragment>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span> Confirm Login
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal} style={{backgroundColor: "#07055a", color: "burlywood"}}>Please login to continue</ModalHeader>
                    <ModalBody style={{backgroundColor: "#47c6ec"}}>
                        <LoginModal />
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ConfirmLogin;