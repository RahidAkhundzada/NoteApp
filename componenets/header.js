import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import {AuthAction} from '../Redux/Action/AuthAction';

const Header = ({AuthAction, title}) => {
  function LogOut() {
    AuthAction(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.textstyl}>{title}</Text>
      </View>

      <View style={styles.logStyle}>
        <TouchableOpacity onPress={() => LogOut()}>
          <Image source={require('../Image/logout.png')} />
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
)(Header);

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgroundColor: 'tomato',
    flexDirection: 'row',
  },

  textView: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textstyl: {
    fontSize: 30,
  },
  logStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
