import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { array } from 'prop-types';
import { Alert } from 'react-native';

import { userMarkerImage } from '../../../image';
import { latitudeDelta, longitudeDelta } from '../../../constants/constants';

class MapComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      userCoords: null,
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta,
        longitudeDelta,
      },
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition( // eslint-disable-line no-undef
      (position) => {
        const { latitude, longitude } = position.coords;
        const { coords } = position;
        this.setState({
          userCoords: coords,
          region: {
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
          }
        });
      },
      () => this.displayLocationErrorAlert(),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  displayLocationErrorAlert() {
    Alert.alert(
      'Error getting current position',
      'Enable location access for a better target experience!'
    );
  }

  render() {
    const { region, userCoords } = this.state;
    const { mapStyle } = this.props;
    return (
      <MapView
        style={mapStyle}
        provider={PROVIDER_GOOGLE}
        region={region}
      >
        { userCoords &&
          <Marker
            image={userMarkerImage}
            coordinate={userCoords}
          />
        }
      </MapView>
    );
  }
}

MapComponent.propTypes = {
  mapStyle: array
};

export default MapComponent;
