import React, { Component } from 'react'; 
import Footer from './Footer';
import Welcome from './Welcome';
import Rooms from './Rooms';
import Restaurants from './Restaurants';
import Services from './Services';
import RoomsDetails from './RoomsDetails';
import { ROOMS } from '../shared/rooms';
import { SERVICES } from '../shared/services';
import { RESTAURANTS } from '../shared/restaurants';

class Main extends Component {
  constructor() {
    super();

    this.state = {
        rooms: ROOMS,
        restaurants: RESTAURANTS,
        services: SERVICES
    };
  }

  sum(a,b) {
    return a+b;
  }
  
  render() {
    console.log(this.sum(1,2));
    return (
      <div>
        <Welcome /> 
        <Rooms rooms={this.state.rooms.filter((room) => room.featured)}/>
        <Restaurants restaurants={this.state.restaurants.filter((restaurant) => restaurant.featured)}/>
        <Services services={this.state.services.filter((service) => service.featured)}/>
        {/* <RoomsDetails rooms={this.state.rooms} /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;