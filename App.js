import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './Screen/Login';
import Note from './Screen/Note';
import NoteAdd from './Screen/NoteAdd';
import NoteFullView from './Screen/NoteFullView';
import NoteEditor from './Screen/NoteEditor';

const StackApp = createStackNavigator();
const StackApp1 = createStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <StackApp.Navigator>
        <StackApp.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
};

const StackNav1 = () => {
  return (
    <NavigationContainer>
      <StackApp1.Navigator>
        <StackApp1.Screen
          name="Note"
          component={Note}
          options={{headerShown: false}}
        />

        <StackApp1.Screen name="NoteAdd" component={NoteAdd} />
        <StackApp1.Screen name="NoteFullView" component={NoteFullView} />
        <StackApp1.Screen name="NoteEditor" component={NoteEditor} />
      </StackApp1.Navigator>
    </NavigationContainer>
  );
};

const App = props => {
  return <Fragment>{props.Login ? <StackNav1 /> : <StackNav />}</Fragment>;
};

const mapStateToProps = state => {
  return {
    Login: state.Logged.Login,
  };
};

export default connect(
  mapStateToProps,
  null,
)(App);
