import React, { Component } from 'react';
import { View, 
         Text,
         Button,
         ScrollView,
         TouchableOpacity,
         TextInput
        } from 'react-native';
import Login from './Login';


// creating a component

export default class Account extends Component {
    render(){
          return(
            <ScrollView style={{flex:1,}}>
            <View style={{backgroundColor:'#ddd'}}>
                <View style={styles.headerStyle}>
                 <Text style={styles.headerText}>Account </Text>
                </View>
               <View style={styles.cardSection}>
                    
                    <View style={styles.border}>
                    <Text style={{fontSize: 30,color:'black',paddingBottom:15}}>My orders</Text>
                    </View>
                    <View style={styles.border}>
                    <Text style={{fontSize: 30,color:'black',paddingBottom:15}}>flipkart pay later</Text>
                    </View>
                    <View style={styles.border}>
                     <Text style={{fontSize: 30,color:'black',paddingBottom:15}}>My wallet</Text>
                     </View>
                     <View style={{margin:10}}> 
                      <Text style={{fontSize: 30,color:'black',paddingBottom:15}}>My address</Text>
                    </View>
                </View>
                <View style={styles.cardSection}>
                    <View style={styles.border}> 
                      <Text style={{fontSize: 20,color:'black',paddingBottom:15}}>Help centre</Text>
                      </View>
                    <View style={styles.border}>
                      <Text style={{fontSize: 20,color:'black',paddingBottom:15}}>my rewards</Text>
                      </View>
                    <View style={styles.border}>
                      <Text style={{fontSize: 20,color:'black',paddingBottom:15}}>Rate the app</Text>
                      </View> 
                    <View style={{margin:10}}>
                      <Text style={{fontSize: 20,color:'black',paddingBottom:15}}>send feedback</Text>
                      </View>               
                </View>
                <View style={styles.cardSection}>
                   <View style={styles.border}>
                    <Text style={{fontSize: 20,color:'black',paddingBottom:15}}>Account settings</Text>
                    </View>
                    <View style={styles.border}>
                    <Text style={{fontSize: 20,color:'black',paddingBottom:15}}>clear history</Text>
                    </View>
                    <View style={styles.border}>
                    <Text style={{fontSize: 20,color:'black',paddingBottom:15}}>legal</Text>
                    </View>
                    <View style={styles.border}>
                    <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Login')}style={{fontSize: 20}}>
                      <Text style={{fontSize: 20,color:'black',paddingBottom:15}}>sign out</Text> 
                    </TouchableOpacity>
                   </View>
                </View> 
                 </View>
            </ScrollView>
        );
    }
}
 
const styles={
    headerStyle:{
        justifyContent:'center',
        alignItems:"center",
        backgroundColor: '#0b09ff',
        // marginTop: 10,
        // marginBottom: 10,
       // borderBottomWidth: 2
    },
    headerText:{
        fontSize: 29,
        fontStyle: 'italic',
        color: 'white',
        padding: 10
    },
    cardSection:{
       
        borderColor:'#D9E3F0',
        backgroundColor:'white',
        borderBottomWidth:1,
        margin:5,
        elevation:1,
        borderWidth:1,
        borderRadius:2,

    },

    border:{
       borderBottomWidth: 1,
       borderColor:'#e1e1e1',
       margin: 10,
    },
   
}


// display="flex"
// display="none"