import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import NavHeader from '../../components/common/NavHeader';
import MapComponent from '../../components/common/MapComponent';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <NavHeader />
        <MapComponent mapStyle={[styles.map]} />
      </View>
    );
  }
}

export default HomeScreen;
