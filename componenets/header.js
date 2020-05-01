import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyl}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textstyl: {
    fontSize: 30,
    fontFamily: 'Cochin',
  },
});
