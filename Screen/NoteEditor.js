import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {NoteAction6, NoteAction10} from '../Redux/Action/NoteAction';

const NoteEditor = ({notes, NoteAction6, navigation, route}) => {
  const {item} = route.params;
  const [Title, setTitle] = useState(item.Title);
  const [Note, setNote] = useState(item.Note);
  const [data, setdata] = useState(notes);

  var ID = item.ID;

  const Find = notes.findIndex(par => par.ID === ID);

  const EditNote = text => {
    setNote(text);
  };
  const EditTitle = text => {
    setTitle(text);
  };

  let date = new Date();
  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
  var year =
    date.getFullYear() < 10 ? '0' + date.getFullYear() : date.getFullYear();
  var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var minute =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var lastEdited = hour + '.' + minute + '/' + day + '.' + month + '.' + year;

  const SaveNote = () => {
    data[Find].Title = Title;
    data[Find].Note = Note;
    data[Find].LastEdited = lastEdited;
    setdata(data);
    setTimeout(() => {
      NoteAction6(data);
      navigation.navigate('Note');
    }, 300);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.NoteTextStyle}>Title</Text>
      <View style={styles.Title}>
        <TextInput
          onChangeText={text => EditTitle(text)}
          placeholder="Title"
          value={Title}
          style={styles.HeaderTextInput}
        />
      </View>

      <View>
        <View>
          <Text style={styles.NoteTextStyle}>Note</Text>
        </View>

        <View style={styles.Note}>
          <ScrollView>
            <TextInput
              onChangeText={text => EditNote(text)}
              value={Note}
              multiline={true}
              placeholder="Note"
            />
          </ScrollView>
        </View>
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity style={{height: 220}} onPress={() => SaveNote()}>
          <Image source={require('../Image/save.png')} />
        </TouchableOpacity>
      </View>
    </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Title: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '10%',
    marginTop: 1,
  },
  Note: {
    height: '80%',
    margin: 5,
  },
  btnView: {
    justifyContent: 'center',
    alignItems: 'center',

    margin: 5,
    height: '10%',
  },
  NoteTextStyle: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'grey',
  },
  HeaderTextInput: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
});
