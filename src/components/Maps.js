import React from 'react';

import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';


class Maps extends React.Component {
  constructor(props){
    super(props)
    console.log('Gmaps ', Gmaps)
    this.onMapCreated = this.onMapCreated.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.onClick = this.onClick.bind()
  }
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {

    let {latitude, longitude} = this.props.coord

    return (
      <Gmaps
        width={'575px'}
        height={'400px'}
        lat={latitude}
        lng={longitude}
        zoom={15}
        styles={[
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#193341"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2c5a71"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#29768a"
            },
            {
                "lightness": -37
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#406d80"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#406d80"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#3e606f"
            },
            {
                "weight": 2
            },
            {
                "gamma": 0.84
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "weight": 0.6
            },
            {
                "color": "#1a3541"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2c5a71"
            }
        ]
    }
]}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'YOUR_API_KEY'}}
        onMapCreated={this.onMapCreated}>

        <Marker
          lat={latitude}
          lng={longitude}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={latitude}
          lng={longitude}
          content={this.props.mapAdd[0]}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={latitude}
          lng={longitude}
          radius={50}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

}

export default Maps
