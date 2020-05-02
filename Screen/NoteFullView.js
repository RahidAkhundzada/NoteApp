import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {NFVStyle} from '../componenets/AllStyle';

const NoteFullView = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={NFVStyle.container}>
      <View style={NFVStyle.titleStyle}>
        <Text style={NFVStyle.titleText}> {item.Title}</Text>
      </View>

      <Text style={NFVStyle.InfoText}>Created Day : {item.TimeDay}</Text>
      <Text style={NFVStyle.InfoText}>Created Time : {item.Time}</Text>
      <Text style={NFVStyle.InfoText}>Edited Time : {item.LastEdited}</Text>
      <ScrollView style={NFVStyle.NoteStyle}>
        <Text>{item.Note}</Text>
      </ScrollView>
      <TouchableOpacity
        style={NFVStyle.editor}
        onPress={() => navigation.navigate('NoteEditor', {item: item})}>
        <Image source={require('../Image/editing.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default NoteFullView;
