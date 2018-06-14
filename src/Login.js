// importing files

 import React,{Component} from 'react';
 import {Text,
         View,
        TouchableOpacity,
        TextInput
        } from 'react-native';

import { Linking} from 'react-native';
import { StackNavigator} from 'react-navigation';
import firebase from 'firebase';
import RootTabs from '../Router';
 //creating a component

 export default class Login extends Component{
    
    state = {
        email: 'r',
        password: 'r'
       }
    login(){
        if(this.state.email=="r" && this.state.password=="r")
        {
           this.props.navigation.navigate('RootTabs');
        }
        else
        {
            alert('you have entered incorrect mail id or password')
        }
    }
//     componentDidMount()
//     { 
//         firebase.initializeApp({
//             apiKey: 'AIzaSyCyazuyomLN9quNKqe45xtxIj7PnfzU9xQ',
//            authDomain: 'auth-2ec42.firebaseapp.com',
//            databaseURL: 'https://auth-2ec42.firebaseio.com',
//            projectId: 'auth-2ec42',
//            storageBucket: 'auth-2ec42.appspot.com',
//           messagingSenderId: '993816034861'
//         });
//    }
  

  render(){
         return(
         <View style={styles.bodyStyle}>
             <View>
                 <Text style={styles.headerText}>Login</Text>
             </View>
           <View >
               <TextInput style={styles.input}
               placeholder='Email'
               placeholderTextColor='#047BD5'
               value={this.state.email}
                onChangeText={(email) => this.setState({ email:email })}
                />
                <TextInput style={styles.input}
               placeholder='Password'
               placeholderTextColor='#047BD5'
               secureTextEntry
               value={this.state.password} onChangeText={(password) => this.setState({ password:password })}
                />
                
                <TouchableOpacity  style={styles.buttonView} onPress={()=>this.login()}>
                  <View >
                      <Text  style={styles.buttonText}>Submit</Text>
                  </View>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.buttonView} onPress={ ()=> Linking.openURL("https://www.facebook.com/")} style={styles.buttonView}>
                   <View>
                       <Text style={styles.buttonText}>login with facebook</Text>
                   </View>
            </TouchableOpacity>
           </View>
           <TouchableOpacity style={styles.buttonView}>
           <View > 
               <Text style={styles.buttonText}>Sign Up</Text>
           </View>
           </TouchableOpacity>
         </View>
        );
     }
 }
 const styles={
     headerText:{
             fontSize:26,
             color:'#047BD5',
             alignSelf:'center'
     },
     bodyStyle:{
        paddingTop:30,
        marginTop:80
     },
     input:{
         margin:15,
         fontSize:16,
         borderColor:'grey',
         borderBottomWidth:1,
         height: 40
        },
        buttonText:{
            fontSize:16,
            color: '#fff',
        },
        buttonView:{
            paddingTop:5,
            margin:15,
            paddingBottom:5,
            borderColor:'#047BD5',
            borderWidth:1,
            backgroundColor:'#047BD5',
            justifyContent:'center',
            alignItems:"center",
            height:40
        }
 }