import React, { Component } from 'react';
import { View, 
         Text,
         Button,
        Image,
    ScrollView} from 'react-native';


// creating a component

export default class WishList extends Component {
    
    render(){
        
    
        return(
            <View style={{backgroundColor:'#fff',flex:1}}>
                <View style={styles.headerStyle}>
                 <Text style={styles.headerText}>WishList(0)</Text>
                </View>
               <View>
                   <Image style={styles.imageStyle}source={require('../photos/wishlist.jpeg')}/>
                   </View>
    
                <View>
                    <Text style={styles.wishText}> Your WishList is empty!</Text>
                
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
    wishText:{
        color:'black',
        marginTop:2,
        fontSize:25,
        alignSelf:'center'
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