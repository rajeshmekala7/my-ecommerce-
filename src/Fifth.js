import React, { Component } from 'react';
import { View, 
         Text,
         Image ,
         ScrollView,
         Button ,
        Linking} from 'react-native';


// creating a component

export default class Fifth extends Component {
    render(){
        return(
            <View style={{ }}>
            <View>
               <Button title='Men'  onPress={()=>this.props.navigation.navigate('Second')}></Button>
            </View>
            <View>
               <Button title='Women' onPress={()=>this.props.navigation.navigate('Third')}></Button>
            </View>
            <View>
               <Button title='Kids' onPress={()=>this.props.navigation.navigate('Fourth')}></Button>
            </View>
            <View>
               <Button title='Electronics' onPress={()=>this.props.navigation.navigate('Fourth')}></Button>
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
    },
   
}