import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import Title from './Title';
import { Link } from 'react-router-dom';

class AllRestaurants extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const rooms = this.props.rooms.map((room) => {
            return(
                <div key={room.id} className="col-12 col-md-6 mt-2">
                    <Card body>
                        <CardImg width="100%" src={process.env.PUBLIC_URL + room.image} alt={room.name}/>
                        <CardTitle tag="h5">{room.name}</CardTitle>
                        <CardText>{room.description}</CardText>
                        <Link to = {`/allrestaurants/${room.id}`}>
                            <Button>Book Now</Button>
                        </Link>
                    </Card>
                </div>
            );
        });
        return(
            <div>
                <Title title="Dining & Restaurants" />
                <div className="container">
                    <div className="row">
                        {rooms}
                    </div>
                </div>
            </div>
        );
    }
}
export default AllRestaurants; 