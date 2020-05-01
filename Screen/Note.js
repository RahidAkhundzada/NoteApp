import React, {useEffect, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NoteAction8, NoteAction9} from '../Redux/Action/NoteAction';
import Header from '../componenets/header';
import NoteLister from '../componenets/NoteLister';

const Note = props => {
  const navigation = useNavigation();

  const TEXT = props.text;

  useEffect(() => {
    DBB();
  });

  function SearchbyTitle(TEXT) {
    const newData = props.notes.filter(function(item) {
      const itemData = item.Title ? item.Title.toUpperCase() : ''.toUpperCase();
      const textData = TEXT.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    props.NoteAction8(newData);
    props.NoteAction9(TEXT);
  }

  function DBB() {
    var DB;
    if (TEXT === '') {
      DB = props.notes;
    } else {
      DB = props.NewData;
    }
    return DB;
  }

  return (
    <View style={styles.container}>
      <Header title="Notes" />
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => SearchbyTitle(text)}
        value={TEXT}
        underlineColorAndroid="transparent"
        placeholder="Search by Note Title"
      />

      <View style={styles.flatstyle}>
        <FlatList
          data={DBB()}
          keyExtractor={item => item.ID}
          renderItem={({item}) => (
            <NoteLister item={item} navigation={navigation} />
          )}
        />
      </View>

      <View style={styles.btnView}>
        <View style={styles.Counter}>
          <Text>Note Count : {props.notes.length}</Text>
        </View>

        <View style={styles.add}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NoteAdd');
            }}>
            <Image source={require('../Image/addnote.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.Note.notes,
    NewData: state.Note.NewData,
    text: state.Note.text,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    NoteAction8: value => {
      dispatch(NoteAction8(value));
    },
    NoteAction9: value => {
      dispatch(NoteAction9(value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Note);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatstyle: {
    flex: 8,
  },
  btnView: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
  },
  Counter: {
    flex: 5,
    justifyContent: 'center',
  },
  add: {
    flex: 1,
    justifyContent: 'center',
  },
});
