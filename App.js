import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';

import Login from './Screen/Login';
import Note from './Screen/Note';
import NoteAdd from './Screen/NoteAdd';

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

        <StackApp1.Screen name='NoteAdd' component={NoteAdd}/>

      </StackApp1.Navigator>
    </NavigationContainer>
  );
};

const App = props => {
  return (
    <React.Fragment>
      {!props.Login ? <StackNav /> : <StackNav1 />}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    Login: state.Auth.login,
  };
};

export default connect(
  mapStateToProps,
  null,
)(App);
