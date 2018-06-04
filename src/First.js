import React, { Component } from 'react';
import { 
         View, 
         Text,
         Button,
         ScrollView,
        Image,
        TouchableOpacity,
        Linking,
        FlatList
    } from 'react-native';

import {SearchBar} from 'react-native-elements';

// creating a component

export default class First extends Component
 {
     state={
         cardDetails:[{"title":"Taylor Swift","artist":"Taylor Swift","url":"https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6","image":"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},{"title":"Fearless","artist":"Taylor Swift","url":"https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM","image":"https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},{"title":"Speak Now","artist":"Taylor Swift","url":"https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886","image":"https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},{"title":"Red","artist":"Taylor Swift","url":"https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU","image":"https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},{"title":"1989","artist":"Taylor Swift","url":"https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI","image":"https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"}]
     }
     
     renderDateData(cardDetails) {
        return (
        <View>
           <Text style={{color:'#fff',fontSize:20}}>{cardDetails.title}</Text>
        </View>
       );
     }
  render()
   { 
    var companies=[
        {name:"Levis"},
        {name:"Wrangler"},
        {name:"Lee"}
   ];
    return(
     <ScrollView style={{flex:1}}>
     
       <View style={{ backgroundColor:'#1976D2' }}>
         <View>
           <View style={styles.headerStyle}>
              <Text style={styles.headerText}>soul store </Text>
            </View> 
         </View>
         <View> 
           <SearchBar
              lightTheme
              round 
              showLoading
              platform="android"
              placeholder='Search for products,brands and more'/>
         </View>
         <ScrollView horizontal={true}>
          <Image style={styles.slideImage} source={{uri:"https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/1304671/2016/4/14/11460624898615-Hancock-Men-Shirts-8481460624898035-1_mini.jpg"}}/> 
          <Image style={styles.slideImage} source={{uri:"data:image/jpeg;base64,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"}}/>   
          <Image style={styles.slideImage} source={{uri:"data:image/jpeg;base64,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"}}/>
        </ScrollView>
         <View style={{marginLeft:10,marginTop:5}}>
            <Text style={{color:'#fff',fontSize:20}}>Deals of the day</Text>
         </View>
         <TouchableOpacity onPress={()=> Linking.openURL('https://www.flipkart.com/search?q=mens%20formal%20shirts&sid=2oq/s9b/mg4/fh5&as=on&as-show=on&marketplace=FLIPKART&otracker=start&as-pos=1_2_ic_mens%20formal%20shirts')}>
            <View>  
                   <View style={{flexDirection:'row'}}>
                   <View style={styles.imageView}>
                    <Image style={styles.imageStyle} source={{uri:"https://4.imimg.com/data4/VU/RW/MY-13823140/men-formal-shirts-500x500.jpg"}}/>
                   </View>
                   <View style={styles.imageView}>
                    <Image style={styles.imageStyle} source={{uri:"https://rukminim1.flixcart.com/image/312/312/shirt/k/n/7/bfshtpc501nbl-being-fab-40-original-imae7dartbugxda6.jpeg?q=70"}}/>
                  

                    </View>
                   </View>
                   
                   <View style={{marginLeft:10,marginTop:5}}>
                      <Text style={{color:'#fff',fontSize:20}}>50% off on</Text>
                      <Text style={{color:'#fff',fontSize:20}}>Mens Formal Shirts</Text>
                      {/* <Text style={{color:'#fff',fontSize:20}}>{this.state.cardDetails[0].title}</Text> */}
                   </View>
                   
                        <FlatList 
                        data={companies}
                        renderItem={
                            ({item}) => <Text style={{color:'#fff',fontSize:20}}>{item.name}</Text>
                        }
                        />
                        <FlatList 
                              data={this.state.cardDetails}
                              keyExtractor={(item, index) => index}
                              renderItem={({ item }) => this.renderDateData(item)}
                            />
                 </View>
                 </TouchableOpacity>

                 <View>
         
                 
                {/* <View style={styles.select}>
                <View>
                   <Button title= '    select here   '  onPress={()=>this.props.navigation.navigate('Fifth') }></Button>
                </View>
                <View>
                   <Button title='    WishList   '  onPress={()=>this.props.navigation.navigate('WishList')}></Button>
                </View>
                <View>
                   <Button title='    Cart   '  onPress={()=>this.props.navigation.navigate('Cart')}></Button>
                </View>
                <View>
                   <Button title='   Account   '  onPress={()=>this.props.navigation.navigate('Account')}></Button>
                </View>
                </View> */}
                </View>
                {/* <Slideshow 
               dataSource={this.state.dataSource}
               position={this.state.position}
               onPositionChanged={position => this.setState({ position })} /> */}
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
    imageView:{
        
    },
    imageStyle:{
        height: 100,
        width: 100,
        marginLeft: 10,
        marginTop: 10,
        resizeMode:'contain'
    },
    slideImage:{
        height:200,width:200,resizeMode:'contain',
        backgroundColor:'#fff'
        },
        
}


// display="flex"
// display="none"