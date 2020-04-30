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

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/note.png')}
        style={{height: '50%', width: '100%'}}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Email"
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        secureTextEntry
        
      />
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.btnStyle}>
          <Text>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
