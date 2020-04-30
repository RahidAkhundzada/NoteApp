import React from 'react';
import {
  StyleSheet,
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
} from '../Redux/Action/NoteAction';

const NoteAdd = props => {
  const navigation = useNavigation();
  const Time = () => {
    let date = new Date();
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
    var year =
      date.getFullYear() < 10 ? '0' + date.getFullYear() : date.getFullYear();
    var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var minute =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    props.NoteAction5(hour + '.' + minute);
    props.NoteAction4(day + '.' + month + '.' + year);
  };

  const TitleFunc = text => {
    props.NoteAction2(text);
  };

  const NoteFunc = text => {
    props.NoteAction3(text);
  };

  let newobj = {
    A: props.title,
    B: props.note,
    C: props.timeDay,
    D: props.time,
  };
  const AddNote = async () => {
    await Time();
    await NoteAction1(props.title);
    console.log(props.notes);

    navigation.navigate('Note');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        style={styles.textInput1}
        multiline={true}
        onChangeText={text => TitleFunc(text)}
      />
      <TextInput
        placeholder="Add Note Here"
        style={styles.textInput2}
        multiline={true}
        onChangeText={text => NoteFunc(text)}
      />
      <TouchableOpacity style={styles.touchStyle} onPress={() => AddNote()}>
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteAdd);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput1: {
    borderBottomColor: 'red',

    borderBottomWidth: 0.5,
    margin: 20,
    width: '70%',
  },
  textInput2: {
    margin: 5,
    borderColor: 'red',
    borderWidth: 0.5,
    height: '60%',
    width: '90%',
  },
  touchStyle: {
    margin: 10,
  },
});
