import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Geocoder from 'react-native-geocoder';
 

export default class Location extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude:null,
      longitude:null,
      error: null,
    };
  }

  refresh = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           
        // latitude: 17.447776,
        // longitude: 78.390406,
         
        error: undefined,
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  };

  render() {
    Geocoder.geocodePosition(this.state.latitude,this.state.longitude)
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>Latitude: {this.state.latitude}</Text>
        <Text style={{fontSize:20}}>Longitude: {this.state.longitude}</Text>

        {/* {this.state.error ? <Text>Error: {this.state.error}</Text> : null} */}
         <Button
          style={{ marginTop: 30 }}
          onPress={() => { this.refresh() }}
          title="Refresh"
        />
      </View>
    );
  }
}

