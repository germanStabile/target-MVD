import React from 'react';
import MapView, { Marker, Circle, PROVIDER_GOOGLE } from 'react-native-maps';
import { array, number, func, bool, object } from 'prop-types';
import { Alert } from 'react-native';
import { connect } from 'react-redux';

import { changeTargetCoords } from '../../../actions/targetActions';
import { whiteColor, targetYellow } from '../../../constants/styleConstants';
import { userMarkerImage } from '../../../image';
import { latitudeDelta, longitudeDelta } from '../../../constants/constants';

class MapComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
    this.onRegionChange = this.onRegionChange.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
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
        const { onPositionChange, changeTargetCoords } = this.props;
        onPositionChange(position.coords);
        changeTargetCoords(position.coords);
        setTimeout(() => {
          this.setState({
            userCoords: coords,
            region: {
              latitude,
              longitude,
              latitudeDelta,
              longitudeDelta,
            }
          });
        }, 100);
      },
      () => this.displayLocationErrorAlert(),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );
  }

  onDragEnd(event) {
    const coords = event.nativeEvent.coordinate;
    const { onPositionChange, changeTargetCoords } = this.props;
    onPositionChange(coords);
    changeTargetCoords(coords);
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
    const { mapStyle, circleRadius, creatingTarget, targetCoords } = this.props;

    const newTargetCoords = targetCoords || userCoords;
    return (
      <MapView
        style={mapStyle}
        provider={PROVIDER_GOOGLE}
        region={region}
        onRegionChangeComplete={this.onRegionChange}
      >
        { userCoords && !creatingTarget &&
          <Marker
            image={userMarkerImage}
            coordinate={userCoords}
          />
        }
        { userCoords && creatingTarget &&
          <Marker
            draggable
            image={userMarkerImage}
            coordinate={newTargetCoords}
            onDragEnd={this.onDragEnd}
          />
        }
        { circleRadius && creatingTarget &&
          <Circle
            center={newTargetCoords}
            radius={circleRadius}
            fillColor={whiteColor}
            strokeColor={targetYellow}
          />
        }
      </MapView>
    );
  }
}

MapComponent.propTypes = {
  mapStyle: array,
  circleRadius: number,
  onPositionChange: func.isRequired,
  creatingTarget: bool,
  targetCoords: object,
  changeTargetCoords: func.isRequired
};

const mapStateToProps = state => ({
  targetCoords: state.getIn(['target', 'targetCoords']),
});

const mapDispatch = dispatch => ({
  changeTargetCoords: coords => dispatch(changeTargetCoords(coords))
});

export default connect(mapStateToProps, mapDispatch)(MapComponent);
