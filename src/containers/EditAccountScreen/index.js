import React from 'react';
import {
   View,
   Text,
   TouchableOpacity,
   Button,
   ImageBackground,
   Modal,
   TouchableWithoutFeedback
 } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { func, bool, object } from 'prop-types';
import { sessionService } from 'redux-react-native-session';

import EditAccountForm from '../../components/login/EditAccountForm';
import EditPasswordForm from '../../components/login/EditPasswordForm';
import styles from './styles';
import Loader from '../../components/common/Loader';
import { editAccount, logOut, editResetPassword } from '../../actions/userActions';
import { profileBubbleGroup, profileIconBig } from '../../image';
import { successfullyEditedProfile, successulyEditedPassword } from '../../constants/messages';

class EditAccountScreen extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        message: null,
        showPasswordModal: false
      };
      this.submittedNewPassword = this.submittedNewPassword.bind(this);
      this.closePasswordModal = this.closePasswordModal.bind(this);
      this.changePasswordView = this.changePasswordView.bind(this);
      this.changePasswordTapped = this.changePasswordTapped.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.logOutButtonTapped = this.logOutButtonTapped.bind(this);
    }

    handleSubmit(values) {
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

    changePasswordTapped() {
      this.setState({
        showPasswordModal: true
      });
    }

    closePasswordModal() {
      this.setState({
        showPasswordModal: false
      });
    }

    submittedNewPassword(values) {
      const { editResetPassword } = this.props;

      return editResetPassword(values.toJS()).then(() => {
        this.setState({
          showPasswordModal: false,
          message: successulyEditedPassword
        })

        setTimeout(() => {
          this.setState({
            message: null
          });
        }, 3000);
      });
    }

    changePasswordView() {
      const { isLoading } = this.props
      const { showPasswordModal } = this.state;
      return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showPasswordModal} >
          <KeyboardAwareScrollView contentContainerStyle={styles.outerModal}>
            <View style={styles.modal}>
              <EditPasswordForm
                onSubmit={this.submittedNewPassword}
                containerStyle={isLoading ? [styles.disabledForm] : []}
              />
              <TouchableOpacity
                onPress={this.closePasswordModal}
                style={styles.cancelEditPassword}
              >
                <Text>CANCEL</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
          {isLoading && <Loader />}
        </Modal>
      );
    }

    logOutButtonTapped() {
      const { logOut } = this.props;
      logOut();
    }

    render() {
      const { isLoading, navigator, user:{ username, email } } = this.props;
      const { message, showPasswordModal } = this.state;
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
              changePasswordTapped={this.changePasswordTapped}
              containerStyle={isLoading ? [styles.disabledForm] : []}
            />
            <View style={styles.divider} />
            <Button onPress={this.logOutButtonTapped} title="LOG OUT" />
            {showPasswordModal && this.changePasswordView()}
          </KeyboardAwareScrollView>
          {isLoading && <Loader />}
        </View>
      );
    }
}

EditAccountScreen.propTypes = {
  editResetPassword: func.isRequired,
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
  editResetPassword: passwords => dispatch(editResetPassword(passwords)),
  editAccount: (id, user) => dispatch(editAccount(id, user)),
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatch)(EditAccountScreen);
