import React, { Component } from 'react';
import { 
         View, 
         Text,
         ScrollView,
        Image,
        TouchableOpacity,
        Linking,
        FlatList,
        Modal
    } from 'react-native';

import {SearchBar} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';


// creating a component

export default class First extends Component
 {
    //  onChangeText(data){
    //      console.warn("===>",data);
    //      if(data=='Mens')
    //       {
    //         this.props.navigation.navigate('Second');
    //       }

    //  }
    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
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
   
    state={
        cardDetails:[{"title":"Taylor Swift","artist":"Taylor Swift","url":"https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6","image":"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},{"title":"Fearless","artist":"Taylor Swift","url":"https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM","image":"https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},{"title":"Speak Now","artist":"Taylor Swift","url":"https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886","image":"https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},{"title":"Red","artist":"Taylor Swift","url":"https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU","image":"https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},{"title":"1989","artist":"Taylor Swift","url":"https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI","image":"https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"}]
    }
    var companies=[
        {name:"Levis"},
        {name:"Wrangler"},
        {name:"Lee"}
   ];
  
    let data= [{
        value: 'Mens',
      }, {
        value: 'Womens',
      }, {
        value: 'Kids',
      }];

    return(
     <ScrollView style={{flex:1}}>
     
       <View style={{ backgroundColor:'#fcfcfc' }}>
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
              showIcon={true}
              cancelButtonTitle="Cancel"
              backgroundColor='#ddd'
              placeholder='Search for products,brands and more'/>
         </View>
         <View>
         <Modal
           animationType="fade"
           transparent={true}
           visible={this.state.modalVisible}
           onRequestClose={() => {
             alert('Modal has been closed.');
           }}>
           <View style={{height:300,top:158}}>
            <View style={styles.cardSection}>
              <View style={styles.border}> 
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('Second');
                        this.setModalVisible(!this.state.modalVisible);
                      }}>
                      <Text style={{fontSize: 20,color:'black',paddingBottom:15}}>Men</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.border}>
                      <Text style={{fontSize: 20,color:'black',paddingBottom:15}}>Women</Text>
                      </View>
                    <View style={styles.border}>
                      <Text style={{fontSize: 20,color:'black',paddingBottom:15}}>Kids</Text>
                      </View> 
                    <View style={{margin:10}}>
                      <Text style={{fontSize: 20,color:'black',paddingBottom:15}}>Electronics</Text>
                      </View>     
                      <View style={{margin:10}}>
                      <TouchableOpacity
                      onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                      }}>
                     <Text style={{fontSize: 20,color:'black',paddingBottom:15}}>Close</Text>
                    </TouchableOpacity>    
                    </View>      
                </View>
               
          </View>
         </Modal>
         </View>
         <View style={{backgroundColor:'#047BD5'}}>
         <View style={{marginLeft:15,marginTop:10,marginBottom:10,backgroundColor:'#047BD5'}}>
         <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={{fontSize:20,color:'#ddd'}}>Select</Text>
        </TouchableOpacity>
        </View>
        </View>
        
        {/* <View>
         <View style={{backgroundColor:'#fcfcfc',}}>
         <View style={{marginLeft:15,marginRight:15}}>
         <Dropdown
            label='Select'
           data={data}
           onChangeText={(value)=>this.onChangeText(value)}
           labelfontSize='40'
           labelColor= '#ddd'
           />
           </View>
         </View> */}
         
         <ScrollView horizontal={true} style={{backgroundColor:'#ddd'}}>
         <View style={styles.cardSection}>
          <Image style={styles.slideImage} source={require('./img/charger1.jpeg')} /> 
         </View>
         <View style={styles.cardSection}> 
          <Image style={styles.slideImage} source={require('./img/book.jpeg')} />   
         </View>
         <View style={styles.cardSection}>
          <Image style={styles.slideImage} source={require('./img/girl.jpeg')} /> 
         </View>
         <View style={styles.cardSection1}> 
          <Image style={styles.slideImage} source={require('./img/watch.jpeg')} />
          </View>
        </ScrollView>
         <View style={{marginLeft:10,marginTop:5}}>
            <Text style={{color:'#047BD5',fontSize:25}}>Deals of the day</Text>
         </View>
         <TouchableOpacity onPress={()=> Linking.openURL('https://www.flipkart.com/search?q=mens%20formal%20shirts&sid=2oq/s9b/mg4/fh5&as=on&as-show=on&marketplace=FLIPKART&otracker=start&as-pos=1_2_ic_mens%20formal%20shirts')}>
            <View style={{}}>  
                   <View style={{flexDirection:'row'}}>             
                   <View style={styles.cardSection2}>
                    <Image style={styles.slideImage} source={require('./img/shirt.jpeg')}/>
                   </View>
                   
                   <View style={styles.cardSection3}>
                    <Image style={styles.slideImage} source={require('./img/shirt2.jpeg')}/>
                  

                    </View>
                   </View>
                   
                   <View style={{marginLeft:20,marginTop:5}}>
                      <Text style={{color:'#047BD5',fontSize:20}}>50% off on</Text>
                      <Text style={{color:'#047BD5',fontSize:20}}>Mens Formal Shirts</Text>
                      {/* <Text style={{color:'#fff',fontSize:20}}>{this.state.cardDetails[0].title}</Text> */}
                   </View>
                   </View>
                   </TouchableOpacity>
                   {/* <View style={{marginLeft:10,marginTop:5}}>
                        <FlatList 
                        data={companies}
                        renderItem={
                            ({item}) => <Text style={{color:'#047BD5',fontSize:20}}>{item.name}</Text>
                        }
                        />
                     </View>
                      */}
                        {/* <FlatList 
                              data={this.state.cardDetails}
                              keyExtractor={(item, index) => index}
                              renderItem={({ item }) => this.renderDateData(item)}
                            /> */}
                        
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
        backgroundColor: '#047BD5',
        
    },
    headerText:{
        fontSize: 29,
        fontStyle: 'italic',
        color: 'white',
        padding: 10
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
        height:200,width:150,resizeMode:'contain',
        backgroundColor:'#fcfcfc'
        },
        cardSection:{
            marginLeft:8,
            marginTop:10,
            marginBottom:15,
            
        },
        cardSection1:{
            marginLeft:8,
            marginTop:10,
            marginBottom:15,
            marginRight:10
        },
        cardSection2:{
            marginLeft:15,
            marginTop:10,
            marginBottom:15,
            borderWidth:2,borderColor:'#ddd'
            
        },
        cardSection3:{
            marginLeft:30,
            marginTop:10,
            marginBottom:15,
            marginRight:10,
            borderWidth:2,borderColor:'#ddd'
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