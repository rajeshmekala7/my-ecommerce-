import React, { Component } from 'react';
import { View, 
         Text,
         Image ,
         ScrollView,
         TouchableOpacity ,
        Linking} from 'react-native';


// creating a component

export default class Second extends Component {
    render(){
        return(
             <View>
               <View style={styles.headerStyle}>
                  <Text style={styles.headerText}>Men</Text>
               </View>
               

             </View>
        );
    }
}
const styles={
    headerStyle:{
        justifyContent:'center',
        alignItems:"center",
        backgroundColor: '#047BD5',
       
    },
    headerText:{
        fontSize: 30,
        color: '#ddd'
    }
}