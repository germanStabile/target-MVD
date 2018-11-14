import React from 'react';
import MapView, { Marker, Circle, PROVIDER_GOOGLE } from 'react-native-maps';
import { array, number, func, bool, object } from 'prop-types';
import { Alert, Image } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { changeTargetCoords, selectTarget } from '../../../actions/targetActions';
import { whiteColor, targetYellow } from '../../../constants/styleConstants';
import { userMarkerImage } from '../../../image';
import { latitudeDelta, longitudeDelta } from '../../../constants/constants';

class MapComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
    this.onRegionChange = this.onRegionChange.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.topicImageWithId = this.topicImageWithId.bind(this);
    this.tappedTarget = this.tappedTarget.bind(this);
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

  tappedTarget(target) {
    const { lat, lng } = target.target;
    const { region } = this.state;
    const { selectTarget, changeTargetCoords } = this.props;
    const coords = {
      latitude: lat,
      longitude: lng
    };
    this.setState({
      region: {
        latitude: lat,
        longitude: lng,
        longitudeDelta: region.longitudeDelta,
        latitudeDelta: region.latitudeDelta
      }
    });
    changeTargetCoords(coords);
    selectTarget(target);
  }

  topicImageWithId(topicId) {
    const { topics } = this.props;
    const topicData = topics.find(element => element.topic.id === topicId);
    const { icon } = topicData.topic;

    return icon;
  }

  displayLocationErrorAlert() {
    Alert.alert(
      'Error getting current position',
      'Enable location access for a better target experience!'
    );
  }

  render() {
    const { region, userCoords } = this.state;
    const { mapStyle, circleRadius, creatingTarget, targetCoords, targets, selectedTarget } = this.props;
    const newTargetCoords = targetCoords || userCoords;
    return (
      <MapView
        style={mapStyle}
        provider={PROVIDER_GOOGLE}
        region={region}
        onRegionChangeComplete={this.onRegionChange}
      >
        {targets &&
          targets.map((targetData, index) => {
            const key = `marker${index}`;
            const { lat, lng, topicId } = targetData.target;
            return (
              <Marker
                key={key}
                onPress={(e) => { e.stopPropagation(); this.tappedTarget(target); }}
                coordinate={{
                  latitude: lat,
                  longitude: lng
                }}
              >
                <Image
                  source={{ uri: this.topicImageWithId(topicId) }}
                  style={styles.image}
                />
              </Marker>
            );
          })
        }
        {userCoords && !creatingTarget &&
          <Marker
            image={userMarkerImage}
            coordinate={userCoords}
          />
        }
        {userCoords && creatingTarget &&
          <Marker
            draggable
            image={userMarkerImage}
            coordinate={newTargetCoords}
            onDragEnd={this.onDragEnd}
          />
        }
        {circleRadius && (creatingTarget || selectedTarget) &&
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
  onPositionChange: func.isRequired,
  selectTarget: func.isRequired,
  changeTargetCoords: func.isRequired,
  targets: array,
  mapStyle: array,
  circleRadius: number,
  creatingTarget: bool,
  targetCoords: object,
  topics: array,
  selectedTarget: object
};

const mapStateToProps = state => ({
  targetCoords: state.getIn(['target', 'targetCoords']),
  targets: state.getIn(['target', 'targets']),
  topics: state.getIn(['target', 'topics']),
  selectedTarget: state.getIn(['target', 'selectedTarget'])
});

const mapDispatch = dispatch => ({
  changeTargetCoords: coords => dispatch(changeTargetCoords(coords)),
  selectTarget: target => dispatch(selectTarget(target))
});

export default connect(mapStateToProps, mapDispatch)(MapComponent);
