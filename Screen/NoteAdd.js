import React from 'react';
import {
  ANStyleheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  NoteAction1,
  NoteAction2,
  NoteAction3,
  NoteAction4,
  NoteAction5,
  NoteAction7,
} from '../Redux/Action/NoteAction';
import {ANStyle} from '../componenets/AllStyle';

const NoteAdd = props => {
  const navigation = useNavigation();

  function GetTime() {
    let date = new Date();
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var month =
      date.getMonth() < 10 ? '0' + date.getMonth() + 1 : date.getMonth() + 1;
    var year =
      date.getFullYear() < 10 ? '0' + date.getFullYear() : date.getFullYear();
    var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var minute =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var second = date.getSeconds();

    props.NoteAction5(hour + '.' + minute);
    props.NoteAction4(day + '.' + month + '.' + year);
    props.NoteAction7(year + month + day + hour + minute + second);
  }

  const TitleFunc = text => {
    props.NoteAction2(text);
    GetTime();
  };

  const NoteFunc = text => {
    props.NoteAction3(text);
    GetTime();
  };

  let newobj = {
    ID: props.ID,
    Title: props.title,
    Note: props.note,
    TimeDay: props.timeDay,
    Time: props.time,
    LastEdited: 'not edited',
  };
  const AddNote = () => {
    props.NoteAction1(newobj);

    setTimeout(() => {
      props.NoteAction2('');
      props.NoteAction3('');
      navigation.navigate('Note');
    }, 200);
  };

  return (
    <View style={ANStyle.container}>
      <TextInput
        placeholder="Title"
        style={ANStyle.textInput1}
        multiline={true}
        onChangeText={text => TitleFunc(text)}
      />
      <TextInput
        placeholder="Add Note Here"
        style={ANStyle.textInput2}
        multiline={true}
        onChangeText={text => NoteFunc(text)}
      />
      <TouchableOpacity style={ANStyle.touchStyle} onPress={() => AddNote()}>
        <Image source={require('../Image/addnote1.png')} />
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = state => {
  return {
    notes: state.Note.notes,
    title: state.Note.title,
    note: state.Note.note,
    timeDay: state.Note.timeDay,
    time: state.Note.time,
    ID: state.Note.ID,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    NoteAction1: value => {
      dispatch(NoteAction1(value));
    },
    NoteAction2: value => {
      dispatch(NoteAction2(value));
    },
    NoteAction3: value => {
      dispatch(NoteAction3(value));
    },
    NoteAction4: value => {
      dispatch(NoteAction4(value));
    },
    NoteAction5: value => {
      dispatch(NoteAction5(value));
    },
    NoteAction7: value => {
      dispatch(NoteAction7(value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteAdd);
