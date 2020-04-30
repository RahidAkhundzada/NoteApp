import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';

const Note = props => {
  const TestBtn = () => {
    console.log(props.Login);
  };
  
  return (
    <View>
      <Text>Note</Text>
      <Button title="ok" onPress={() => TestBtn()} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    Login: state.Auth.login,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Note);

const styles = StyleSheet.create({});
