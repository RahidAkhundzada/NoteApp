import React from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {AuthAction} from '../Redux/Action/AuthAction';
import {LoginStyle} from '../componenets/AllStyle';

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
    <View style={LoginStyle.container}>
      <Image
        source={require('../Image/note.png')}
        style={{height: '50%', width: '100%'}}
      />
      <TextInput
        style={LoginStyle.TextInput}
        placeholder="Username"
        onChangeText={text => (User = text)}
      />
      <TextInput
        style={LoginStyle.TextInput}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => (Password = text)}
      />
      <View style={LoginStyle.btnView}>
        <TouchableOpacity
          style={LoginStyle.btnStyle}
          onPress={() => LoginFunc()}>
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
