import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {NoteAction6} from '../Redux/Action/NoteAction';
const ww = Dimensions.get('window').width;
const hh = Dimensions.get('window').height;

const NoteLister = ({notes, NoteAction6, item}) => {
  
  const navigation = useNavigation();

  const NoteRemove = par => {
    const filtered = notes.filter(item1 => item1.ID !== par);
    NoteAction6(filtered);
    alert('Note delated successfully');
  };

  const KeepPressed = () => {
    Alert.alert(
      'Do you want Delate this note?',
      item.Title,

      [
        {
          text: 'OK',
          onPress: () => NoteRemove(item.ID),
        },
        {text: '', onPress: () => console.log('OK Pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('NoteFullView', {item: item})}
      onLongPress={() => KeepPressed()}
      underlayColor="orange">
      <View style={styles.container}>
        <View style={styles.stylTitle}>
          <Text style={styles.titleText}>{item.Title}</Text>
        </View>

        <View style={styles.NoteStyle}>
          <Text style={styles.NoteText}>{item.Note}</Text>
        </View>
        <View style={styles.TimeStyle}>
          <Text style={styles.TimeText}>
            Time:{item.Time} / {item.TimeDay}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.Note.notes,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    NoteAction6: value => {
      dispatch(NoteAction6(value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteLister);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.5,
    margin: 15,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  stylTitle: {
    marginLeft: ww / 10,
    marginTop: 10,
    borderBottomWidth: 0.5,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: hh / 40,
    color: 'red',
  },
  NoteStyle: {
    marginLeft: ww / 18,
    marginTop: 10,
  },
  NoteText: {
    fontSize: 16,
    height: hh / 15,
  },
  TimeStyle: {
    flexDirection: 'row-reverse',
  },
  TimeText: {
    color: 'gray',
  },
});
