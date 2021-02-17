import React, { Component } from 'react';
import { ROOMS } from '../shared/rooms';
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import Title from './Title';
import More from './More';
import { Link } from 'react-router-dom';

function RenderCard({items}) {
    const card = items.map((item) => {
        return(
            <div key={item.id} className="col-12 col-md-4 mt-4 mb-4">
                <Card body>
                    <CardImg width="100%" src={process.env.PUBLIC_URL + item.image} alt={item.name}/>
                    <CardTitle tag="h5" style={{marginTop: "10px"}}>{item.name}</CardTitle>
                    <CardText>{item.description}</CardText>
                    <Link to = {`/allservices/${item.id}`}>
                        <Button>Book Now</Button>
                    </Link>
                </Card>
            </div>
        );
    });
    return(
        <div className="container">
            <div className="row">
                    {card}
            </div>
        </div>
    );
}

function Services(props) {
    console.log(props.rooms)
    return(
        <div>
            <Title title="Amenities & Services"/>
            <RenderCard items = {props.services}/>
            <Link to="/allservices"><More info="See All Services" /> </Link>
        </div>
    );

}

export default Services; 