
import {createStore} from 'redux'
import React from "react";
import rootReducer from '../reducers'
import {Provider} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoScreen from '../screens/screenToDo';
import LoginScreen from '../screens/screenLogin';
import AddToDo from '../screens/screenAddToDo';


const Stack = createStackNavigator();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);
const Nav =() =>{
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ToDoScreen">
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="AddToDo" component={AddToDo} />
          <Stack.Screen name="ToDoScreen" component={ToDoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default Nav

