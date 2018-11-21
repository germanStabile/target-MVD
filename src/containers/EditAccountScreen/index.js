import React from 'react';
import { View, Text, TouchableOpacity, Button, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { func, bool, object } from 'prop-types';
import { sessionService } from 'redux-react-native-session';

import EditAccountForm from '../../components/login/EditAccountForm';
import styles from './styles';
import Loader from '../../components/common/Loader';
import { editAccount, logOut } from '../../actions/userActions';
import { profileBubbleGroup, profileIconBig } from '../../image';
import { successfullyEditedProfile } from '../../constants/messages';

class EditAccountScreen extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        message: null
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.logOutButtonTapped = this.logOutButtonTapped.bind(this);
    }

    handleSubmit = (values) => {
      const { editAccount, user: { id } } = this.props;
      return editAccount(id, { user: values.toJS() }).then(() => {
        this.setState({
          message: successfullyEditedProfile
        });

        setTimeout(() => {
          this.setState({
            message: null
          });
        }, 3000);
      });
    }

    logOutButtonTapped() {
      const { logOut } = this.props;
      logOut();
    }

    render() {
      const { isLoading, navigator, user:{ username, email } } = this.props;
      const { message } = this.state;
      const initialValues = {
        username,
        email
      };

      return (
        <View style={styles.container}>
          <KeyboardAwareScrollView pointerEvents={isLoading ? 'none' : 'auto'}>
            <ImageBackground
              source={profileBubbleGroup}
              style={styles.headerBackground}
              imageStyle={styles.headerImage}
            />
            <ImageBackground
              source={profileIconBig}
              style={styles.profileBackground}
              imageStyle={styles.profileImage}
            />
            {message && <Text style={styles.successMessage}>{message}</Text>}
            <EditAccountForm
              initialValues={initialValues}
              onSubmit={this.handleSubmit}
              containerStyle={isLoading ? [styles.disabledForm] : []}
            />
            <View style={styles.divider} />
            <Button onPress={this.logOutButtonTapped} title="LOG OUT" />
          </KeyboardAwareScrollView>
          {isLoading && <Loader />}
        </View>
      );
    }
}

EditAccountScreen.propTypes = {
  editAccount: func.isRequired,
  isLoading: bool.isRequired,
  logOut: func.isRequired,
  user: object.isRequired,
  navigator: object.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.getIn(['user', 'isLoading']),
  user: state.getIn(['session', 'user']).toJS()
});

const mapDispatch = dispatch => ({
  editAccount: (id, user) => dispatch(editAccount(id, user)),
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatch)(EditAccountScreen);
