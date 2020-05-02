import {StyleSheet} from 'react-native';

export const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  TextInput: {
    borderWidth: 0.5,
    borderColor: 'gray',
    height: 40,
    margin: 10,
    borderRadius: 10,
  },
  btnView: {
    alignItems: 'center',
    margin: 20,
  },
  btnStyle: {
    height: 50,
    width: 80,
    borderRadius: 10,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const NFVStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
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
  InfoText: {
    color: 'grey',
  },
  NoteStyle: {
    height: '80%',
    marginTop: 30,
  },
  editor: {
    height: '10%',
    alignItems: 'center',
    margin: 10,
  },
});

export const ANStyle = StyleSheet.create({
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

export const NEStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  Title: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Note: {
    height: '72%',
  },
  imgBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  NoteTextStyle: {
    marginLeft: 15,
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
