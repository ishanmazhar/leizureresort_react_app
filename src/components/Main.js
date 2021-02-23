import React, { Component } from 'react'; 
import { ROOMS } from '../shared/rooms';
import { SERVICES } from '../shared/services';
import { RESTAURANTS } from '../shared/restaurants';
import Footer from './Footer';
import Welcome from './Welcome';
import Rooms from './Rooms';
import Restaurants from './Restaurants';
import Services from './Services';
import AllRooms from './AllRooms';
import AllServices from './AllServices';
import AllRestaurants from './AllRestaurants';
import Header from './Header';
import { RoomDetails, RestDetails, ServiceDetails } from './InfoDetails';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor() {
    super();

    this.state = {
        rooms: ROOMS,
        restaurants: RESTAURANTS,
        services: SERVICES,

        isLoggedIn: false
    };
    this.isLoggedIn = this.isLoggedIn.bind(this); 
  }

  isLoggedIn() {
    this.setState({
      isLoggedIn: true
    });
  }
  
  render() {

    const RoomWithId = ({match}) => {
      return(
        <RoomDetails room={this.state.rooms.filter((room) => room.id === parseInt(match.params.roomId, 10))[0]} />
      );
    }

    const RestWithId = ({match}) => {
      return(
        <RestDetails rest={this.state.restaurants.filter((rest) => rest.id === parseInt(match.params.restId, 10))[0]} />
      );
    }

    const ServiceWithId = ({match}) => {
      return(
        <ServiceDetails service={this.state.services.filter((service) => service.id === parseInt(match.params.serviceId, 10))[0]} />
      );
    }
    console.log(this.state.isLoggedIn); 

    return (
      <div>
        <Header isLoggedIn={this.isLoggedIn} /> 
        <TransitionGroup>
            <CSSTransition in={this.state.mounted} classNames="page" timeout={300}> 
              <Switch>
                <Route exact path='/home'>
                  <Welcome />
                  <Rooms rooms={this.state.rooms.filter((room) => room.featured)} />
                  <Restaurants restaurants={this.state.restaurants.filter((restaurant) => restaurant.featured)} />
                  <Services services={this.state.services.filter((service) => service.featured)} />
                </Route>
                <Route exact path ="/allrooms" component = {() => <AllRooms rooms={this.state.rooms} />} /> 
                <Route path = "/allrooms/:roomId" component = {RoomWithId} /> 
                <Route exact path ="/allrestaurants" component = {() => <AllRestaurants rooms={this.state.restaurants} />} /> 
                <Route path = "/allrestaurants/:restId" component = {RestWithId} /> 
                <Route exact path ="/allservices" component = {() => <AllServices rooms={this.state.services} />} /> 
                <Route path = "/allservices/:serviceId" component = {ServiceWithId} />  
                <Redirect to="/home" /> 
              </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default Main;