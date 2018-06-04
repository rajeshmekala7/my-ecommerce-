// importing files

 import React,{Component} from 'react';
 import {Text,
         View,
        TouchableOpacity,
        TextInput
        } from 'react-native';
import RootTabs from '../Router';
import { Linking} from 'react-native';
import { StackNavigator} from 'react-navigation';
 //creating a component

 export default class Login extends Component{
   
state = {
    email: '',
    password: ''
 }

 login(){
     if(this.state.email=="r" && this.state.password=="r")
     {
        this.props.navigation.navigate('RootTabs');
     }
     else
     {
         alert('you have entered incorrect mailid or password')
     }
 }
     render(){
         return(
         <View style={styles.bodyStyle}>
             <View>
                 <Text style={styles.headerText}>Login</Text>
             </View>
           <View >
               <TextInput style={styles.input}
               placeholder='Email'
               placeholderTextColor='blue'
                onChangeText={(email) => this.setState({ email:email })}
                />
                <TextInput style={styles.input}
               placeholder='Password'
               placeholderTextColor='blue'
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
             fontSize:30,
             color:'blue',
             alignSelf:'center'
     },
     bodyStyle:{
        paddingTop:30,
     },
     input:{
         margin:15,
         fontSize:15,
         borderColor:'#0826F9',
         borderWidth:1,
         height: 40
        },
        buttonText:{
            fontSize:20,
            color: 'blue',
        },
        buttonView:{
            paddingTop:5,
            margin:15,
            paddingBottom:5,
            borderColor:'#0826F9',
            borderWidth:1,
            justifyContent:'center',
            alignItems:"center",
        }
 }