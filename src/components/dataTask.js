import React, { Component } from "react";
import { View, StyleSheet, Button, Text, Image} from "react-native";


const DataTask = (props) => {
    return(
        <View style={{borderBottomWidth:1,borderBottomColor: 'white',paddingBottom: 20}}>
            <View >
                <Text onPress={() => props.onDelete(props.taskName)} style={props.styless.textTaskName}>{props.taskName}</Text>
                {/* <Image 
                    style={props.styless.imgPencil} 
                    source={props.img}
                /> */}
                {/* кнопка удаления заместь картинки */}
            </View>
            {/* <Text style={props.styless.textTask}>{props.taskText}</Text>*/}
        </View>
      );
}

export default DataTask;