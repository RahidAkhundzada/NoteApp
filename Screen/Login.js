import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {AuthAction} from '../Redux/Action/AuthAction';

const Login = props => {
  let User = null,
    Password = null,

    LoginFunc = () => {
      if (User === 'Admin' && Password === 'Admin') {
        props.AuthAction(true);
      } else {
        alert('Please correct Username or Password');
      }
    };

  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/note.png')}
        style={{height: '50%', width: '100%'}}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Username"
        onChangeText={text => (User = text)}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => (Password = text)}
      />
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btnStyle} onPress={() => LoginFunc()}>
          <Text>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    AuthAction: value => {
      dispatch(AuthAction(value));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  TextInput: {
    borderWidth: 0.5,
    borderColor: 'gray',
    height: 40,
    margin: 10,
    borderRadius: 10,
  },
  btnView: {
    alignItems: 'center',
    margin: 20,
  },
  btnStyle: {
    height: 50,
    width: 80,
    borderRadius: 10,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
