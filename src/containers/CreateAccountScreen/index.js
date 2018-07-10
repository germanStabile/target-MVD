import React from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { func, bool, object } from 'prop-types';

import CreateAccountForm from '../../components/login/CreateAccountForm';
import styles from './styles';
import Header from '../../components/common/Header';
import { signUp } from '../../actions/userActions';
import { blackColor } from '../../constants/styleConstants';

class CreateAccountScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit = (values) => {
      const { signUp } = this.props;
      return signUp(values.toJS());
    }

    render() {
      const { isLoading, navigator } = this.props;
      return (
        <View style={styles.container}>
          <KeyboardAwareScrollView pointerEvents={isLoading ? 'none' : 'auto'}>
            <Header style={styles.header} />
            <CreateAccountForm
              onSubmit={this.handleSubmit}
              containerStyle={isLoading ? [styles.disabledForm] : []}
            />
            <View style={styles.divider} />
            <TouchableOpacity onPress={() => navigator.pop()} style={styles.signIn}>
              <Text style={styles.signInText}>SIGN IN</Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
          <ActivityIndicator
            style={isLoading ? styles.activityLoading : styles.hidden}
            size="large"
            color={blackColor}
            animating={isLoading}
          />
        </View>
      );
    }
}

CreateAccountScreen.propTypes = {
  signUp: func.isRequired,
  isLoading: bool.isRequired,
  navigator: object.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.getIn(['user', 'isLoading'])
});

const mapDispatch = dispatch => ({
  signUp: user => dispatch(signUp(user))
});

export default connect(mapStateToProps, mapDispatch)(CreateAccountScreen);
