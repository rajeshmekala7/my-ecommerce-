import React, { Component } from 'react';
import { View, 
         Text,
         Button,
        Image} from 'react-native';


// creating a component

export default class Cart extends Component {
    
    render(){
        
    
        return(
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={styles.headerStyle}>
                 <Text style={styles.headerText}>cart </Text>
                
                </View>
                <View>
                   <Image style={styles.imageStyle}source={require('../photos/cart.jpeg')}/>
                   </View>
                <View>

                    <Text style={styles.cartText}>Your cart is empty</Text>
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
        fontSize: 29,
        fontStyle: 'italic',
        color: 'white',
        padding: 10
    },
    select:{
        flexDirection:'row',
        marginTop:350,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
   cartText:{
       fontSize:25,
       color:'black',
       alignSelf:'center',
       marginTop:2,

   },
   imageStyle:{
    alignItems:'center',
    justifyContent:'center',
    height: 300,
    width: 300,
    marginTop:70,
    marginLeft:50,
    resizeMode: 'contain'
}
}


// display="flex"
// display="none"