import React, { Component } from 'react';

class GoogleMap extends Component {
  //lifecycle method that is called after component called to screen
  componentDidMount(){
    console.log(this.props.lat, this.props.lon)
    //method that creates embedded map
    //map will take a reference to html node where want to render map to
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    //the ref allows us to get reference to html rendered to page
    // allows use of this.refs.map to reference
    return <div ref="map" />;
  }
}

export default GoogleMap;
