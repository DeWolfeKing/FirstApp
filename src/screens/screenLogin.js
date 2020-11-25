import React, {Component} from "react";
import { View, Text, TextInput,Button} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import loginActions from "../actions/loginActions";

const LoginScreen = (props, {Component}) => {
  
  const dispatch = useDispatch();
  
  const [loginInput, onChangeLogin] = React.useState('Login');
  const [passInput, onChangePass] = React.useState('Password');

  const toNextScrenn = () => {
    if(storeUsername === loginInput && storePassword === passInput){
      dispatch(loginActions.login())
      props.navigation.navigate('ToDoScreen')
    }else{
      alert('wrong name or pass')
    }
  }
  const { storeUsername, storePassword } = useSelector((state) =>
  { console.log('here123', state)
    return ({
    storeUsername: state.logginReducer.userName,
    storePassword: state.logginReducer.userPass
  })})
  
  return (
    <View style={{
      padding: 40,
      paddingTop: 80,
      backgroundColor: '#B8E986',
      flex: 1}}>
      <View style={{alignItems:"center"}}>
        <TextInput
          style={{ height: 40,width: 300, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeLogin(text)}
          value={loginInput}      
        />
        <TextInput
          style={{ height: 40,width: 300, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangePass(text)}
          value={passInput} 
        />
        <Button
          onPress={() => toNextScrenn()} 
          title="Login"
          color="black"
        />
      </View>
    </View> 
  );
}

export default LoginScreen
