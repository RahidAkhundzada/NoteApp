import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

const Note = ({navigation}) => {
  const TestBtn = () => {
    console.log(props.Login);
  };

  return (
    <View>
      <View>
        <Text>Note</Text>
        <Button title="ok" onPress={() => navigation.navigate('NoteAdd')} />
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity onPress={() => navigation.navigate('NoteAdd')}>
          <Image source={require('../Image/addnote.png')} />
        </TouchableOpacity>
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnView: {
    margin: 10,
    flexDirection: 'row-reverse',
  },
});
