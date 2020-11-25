import { View, Text, Button, TextInput} from "react-native";
import React, { useState } from 'react';
import todoActions from "../actions/todoActions";
import { useDispatch, useSelector } from "react-redux";

const AddToDo = (props) => {
  
  const dispatch = useDispatch();
  const todoList = useSelector((state) =>{
    return state.todoReducer.todoList
  })
  const [nameTaskInput, onChangeTaskName] = useState('nameTask');
  const addTask = () => {
    const isItemExist = todoList.map((item) => item.taskName === nameTaskInput);

    if (isItemExist.includes(true)) {
      alert('Wrong taskName')
    } else {
      dispatch(todoActions.pushTask(nameTaskInput))
      props.navigation.navigate('ToDoScreen')
    }
  }
 

  return(
    <View style={{
      padding: 40,
      paddingTop: 80,
      backgroundColor: '#B8E986',
      flex: 1}}>
      <View style={{}}>
        <TextInput style={{ height: 40,width: 300, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeTaskName(text)}
          value={nameTaskInput} 
        />
        <Button
          onPress={() => addTask()}
          title="Add Task"
          color="black"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
}

export default AddToDo