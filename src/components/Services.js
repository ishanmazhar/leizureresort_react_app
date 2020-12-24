import React, { Component } from 'react';
import { ROOMS } from '../shared/rooms';
import { Card, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import Title from './Title'

function RenderCard({items}) {
    const card = items.map((item) => {
        return(
            <div key={item.id} className="col-12 col-md-4 mt-4 mb-4">
                <Card body>
                    <CardImg width="100%" src={item.image} alt={item.name}/>
                    <CardTitle tag="h5" style={{marginTop: "10px"}}>{item.name}</CardTitle>
                    <CardText>{item.description}</CardText>
                    <Button>Book Now</Button>
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
        </div>
    );

}

export default Services; 