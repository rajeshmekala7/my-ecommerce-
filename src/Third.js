import React, { Component } from 'react';
import { View, 
         Text,
         Image ,
         ScrollView,
         TouchableOpacity ,
        Linking} from 'react-native';


// creating a component

export default class Third extends Component {
    render(){
        return(
             <View>
               <View style={styles.headerStyle}>
                  <Text style={styles.headerText}>Women</Text>
               </View>
               

             </View>
        );
    }
}
const styles={
    headerStyle:{
        justifyContent:'center',
        alignItems:"center",
        backgroundColor: '#CAF3DF',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 2
    },
    headerText:{
        fontSize: 30,
        color: '#13EC7F'
    }
}