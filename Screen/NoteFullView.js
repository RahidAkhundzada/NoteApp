import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

const NoteFullView = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.HeaderStyle}>
        <View style={styles.titleStyle}>
          <Text style={styles.titleText}> {item.Title}</Text>
        </View>

        <View style={styles.TimeStyle}>
          <Text style={styles.TimeText}>Created Day : {item.TimeDay}</Text>
          <Text style={styles.TimeText}>Created Time : {item.Time}</Text>
          <Text style={styles.TimeText}>Edited Time : {item.LastEdited}</Text>
        </View>
      </View>
      <View style={styles.NoteStyle}>
        <ScrollView>
          <Text>{item.Note}</Text>
        </ScrollView>
      </View>
      <View style={styles.editor}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NoteEditor', {item: item})}>
          <Image source={require('../Image/editing.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoteFullView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    alignItems: 'center',
  },
  HeaderStyle: {
    height: '15%',
  },
  titleText: {
    fontSize: 30,
    color: 'red',
  },
  TimeStyle: {
    margin: 10,
  },
  TimeText: {
    color: 'grey',
  },
  NoteStyle: {
    height: '70%',
    margin: 10,
  },
  editor: {
    height: '15%',
    alignItems: 'center',
    margin: 10,
  },
});
