import React, { Component } from 'react';
import { ROOMS } from '../shared/rooms';
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import Title from './Title';

class RoomsDetails extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const rooms = this.props.rooms.map((room) => {
            return(
                <div key={room.id} className="col-12 col-md-6 mt-2">
                    <Card body>
                        <CardImg width="100%" src={room.image} alt={room.name}/>
                        <CardTitle tag="h5">{room.name}</CardTitle>
                        <CardText>{room.description}</CardText>
                        <Button>Book Now</Button>
                    </Card>
                </div>
            );
        });
        return(
            <div>
                <Title title="Rooms & Suites" />
                <div className="container">
                    <div className="row">
                        {rooms}
                    </div>
                </div>
            </div>
        );
    }
}
export default RoomsDetails; 