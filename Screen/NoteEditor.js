import React, {useState} from 'react';
import {
  NEStyleheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import {NoteAction6, NoteAction10} from '../Redux/Action/NoteAction';
import {NEStyle} from '../componenets/AllStyle';

const NoteEditor = ({notes, NoteAction6, navigation, route}) => {
  const {item} = route.params;
  const [Title, setTitle] = useState(item.Title);
  const [Note, setNote] = useState(item.Note);

  var ID = item.ID;
  const Find = notes.findIndex(par => par.ID === ID);
  let newData = [...notes];

  const EditNote = text => {
    setNote(text);
    GetTime();
  };
  const EditTitle = text => {
    setTitle(text);
    GetTime();
  };

  function GetTime() {
    let date = new Date();
    let ay = date.getMonth() + 1;
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var month = ay < 10 ? '0' + ay : ay;
    var year =
      date.getFullYear() < 10 ? '0' + date.getFullYear() : date.getFullYear();
    var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var minute =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var lastEdited = hour + '.' + minute + '/' + day + '.' + month + '.' + year;
    return lastEdited;
  }

  const SaveNote = () => {
    newData[Find].Title = Title;
    newData[Find].Note = Note;
    newData[Find].LastEdited = GetTime();
    setTimeout(() => {
      NoteAction6(newData);
      navigation.navigate('Note');
    }, 300);
  };

  return (
    <SafeAreaView style={NEStyle.container}>
      <Text style={NEStyle.NoteTextStyle}>Title</Text>
      <View style={NEStyle.Title}>
        <TextInput
          onChangeText={text => EditTitle(text)}
          placeholder="Title"
          value={Title}
          style={NEStyle.HeaderTextInput}
        />
      </View>
      <Text style={NEStyle.NoteTextStyle}>Note</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView style={NEStyle.Note}>
          <TextInput
            onChangeText={text => EditNote(text)}
            value={Note}
            multiline={true}
            placeholder="Note"
          />
        </ScrollView>
      </KeyboardAvoidingView>

      <TouchableOpacity onPress={() => SaveNote()} style={NEStyle.imgBtn}>
        <Image source={require('../Image/save.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.Note.notes,
    text: state.Note.text,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    NoteAction6: value => {
      dispatch(NoteAction6(value));
    },
    NoteAction10: value => {
      dispatch(NoteAction10(value));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteEditor);
