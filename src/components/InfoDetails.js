import React from 'react'; 
import { Card, CardImg, CardBody, CardText, CardTitle, Button, Row, Label, 
    Col, Form, FormGroup, Input, FormFeedback, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { LocalForm, Control, Errors} from 'react-redux-form';
import { Link } from 'react-router-dom'; 
import ConfirmLogin from './ConfirmLogin'; 
import LoginModal from './LoginModal'; 

function RenderCard({item}) {
    if(item != null) {
        return(
            <div>
                <Card style={{margin: "20px 0px 20px 0px"}}> 
                    <CardImg width = "100%" src = {process.env.PUBLIC_URL + item.image} alt = {item.name} /> 
                    <CardBody>
                        <CardTitle tag = "h3"> {item.name} </CardTitle>
                        <CardText> {item.description} </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    else {
        return(
            <div></div>
        )
    }

}

class BookingForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            telnum: '',
            email: '',
            occupancies: '',
            message: '',
            x: 0,
            touched: {
                name: false,
                telnum: false,
                email: false,
                occupancies: false
            },
            isLoggedIn: false,
            isModalOpen: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this); 
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    //------------------------ Login Methods -------------------------
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + "Password: " + this.password.value 
            + " Remember: " + this.remember.chacked);
        this.setState({
            isLoggedIn: true
        });
        event.preventDefault();
    }
    //------------------------ Login Methods -----------------------
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value; 
        const name = target.name;
        this.setState({
            [name] : value 
        });
    }

    handleSubmit(event) {
        if(!this.state.isLoggedIn) {
            console.log(this.state.isLoggedIn); 
            this.toggleModal();
        } else {
            console.log(this.state.isLoggedIn); 
            this.state.x++; 
            console.log('x = ' + this.state.x); 
            var free = 3 - this.state.x; 
            if (this.state.x > 3) { 
                alert("Sorry! All the rooms are occupied!");
            } else {
                alert(` Order has been confirmed as
                Guest's Name:  ${this.state.name}
                Mobile Number: ${this.state.telnum}
                No. of Occupancies: ${this.state.occupancies}
        
                Thank you very much for your booking.
                We are contacting you soon.
                
                No. of Free Rooms: ${free}`);  
            }
        }
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        })
    }

    validate(name, telnum, email, occupancies) { 
        const errors = {
            name: '',
            telnum: '',
            email: '',
            occupancies: ''
        }

        if (this.state.touched.name && name.length < 3)
            errors.name = "Your name should be >= 3 Characters";
        
        const regexp = /^\d+$/;
        if (this.state.touched.telnum && !regexp.test(telnum))
            errors.telnum = "Please enter a valid phone number";
        
        const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (this.state.touched.email && !validEmail.test(email))
            errors.email = "Please enter a valid email address";

        if (this.state.touched.occupancies && isNaN(parseInt(occupancies)))
            errors.email = "Please enter the number of occupancies"; 

        return errors;
    }

    render() {
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => (val) && (val.length >= len);
        // const isNumber = !isNan(Number(val)); 
        const formTitlestyles = {
            backgroundColor:"darkblue", 
            borderRadius:"5px",
            color:"burlywood",
            padding:"20px", 
            textAlign:"center"
        }

        const errors = this.validate(this.state.name, this.state.telnum, this.state.email, this.state.occupancies); 
        return(
            <div style={{margin: "20px 0px 20px 0px"}}>
                <Card> 
                    <CardBody>
                        <CardTitle tag = "h3" style={formTitlestyles}> Please Confirm Your Booking </CardTitle>
                        <CardText style={{paddingLeft:"10px"}}> 
                            <Form onSubmit={this.handleSubmit}> 
                                <FormGroup row>
                                    <Label htmlFor="name" md={3}>Your Name: </Label>
                                    <Col md={9}>
                                        <Input type="text" id="name" name="name"
                                            placeholder="Your Name"
                                            invalid={errors.name !== ''}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('name')} required /> 
                                        <FormFeedback>{errors.name}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="telnum" md={3}>Mobile No.: </Label>
                                    <Col md={9}>
                                        <Input type="tel" id="telnum" name="telnum"
                                            placeholder="Your Mobile Number"
                                            invalid={errors.telnum !== ''}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('telnum')} required/> 
                                        <FormFeedback>{errors.telnum}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={3}>Email: </Label>
                                    <Col md={9}>
                                        <Input type="email" id="email" name="email"
                                            placeholder="Your Email Address"
                                            invalid={errors.email !== ''} 
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('email')} required/> 
                                        <FormFeedback>{errors.email}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="occupancies" md={3}>Occupancy: </Label>
                                    <Col md={9}>
                                        <Input type="select" id="occupancies" name="occupancies"
                                            placeholder="Number of Occupancies"
                                            onChange={this.handleInputChange} required>
                                                <option>Select</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                        </Input> 
                                        <FormFeedback>{errors.occupancies}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="message" md={3}>Comment: </Label>
                                    <Col md={9}>
                                        <Input type="textarea" id="message" name="message"
                                            rows="7"
                                            onChange={this.handleInputChange} /> 
                                    </Col>
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary" 
                                        style={{display:"block", marginRight:"auto", marginLeft:"auto"}}>
                                    Confirm Booking
                                </Button>
                            </Form>
                            {/* <ConfirmLogin /> */}
                        </CardText>
                    </CardBody>
                </Card>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal} style={{backgroundColor: "#07055a", color: "burlywood"}}>Please login to continue</ModalHeader>
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


                {/* React-Redux_form */}

                {/* <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={3}>Rating</Label>
                                <Col md={{size: 9}}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={3}>Your Name</Label>
                                <Col md={9}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }} />
                                    <Errors 
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required & ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={3}>Comment</Label>
                                <Col md={9}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary" 
                                style={{display:"block", marginRight:"auto", marginLeft:"auto"}}>Confirm Booking</Button>
                        </LocalForm> */}
            </div>
        );
    }
}
export function RoomDetails(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <RenderCard item = {props.room} /> 
                </div>
                <div className="col-12 col-md-6 mt-1">
                    <BookingForm />
                </div>
            </div>
        </div>
    );
}

export function RestDetails(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <RenderCard item = {props.rest} /> 
                </div>
                <div className="col-12 col-md-6 mt-1">
                    <BookingForm />
                </div>
            </div>
        </div>
    );
}

export function ServiceDetails(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <RenderCard item = {props.service} />  
                </div>
                <div className="col-12 col-md-6 mt-1">
                    <BookingForm />
                </div>
            </div>
        </div>
    );
}

// export default RoomDetails; 