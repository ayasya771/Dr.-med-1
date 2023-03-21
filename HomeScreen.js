import React, { Component } from 'react';
import { StyleSheet, Text, Image,View, TextInput, TouchableOpacity, Platform, StatusBar, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from './database1';
import {RFValue} from 'react-native-responsive-fontsize';
import InputScreen from './InputScreen';

export default class HomeScreen extends React.Component {
   render(){
    return(
      <View style={styles.container}>
      <Header
          backgroundColor={'#410e93'}
          centerComponent={{
            text: 'Dr.Med',
            style: { color: 'white', fontSize: 20 },
          }}
        />
         <SafeAreaView style={styles.droidSafeArea} />
            <Image
              source={require("./assets/home.gif")}
              style={styles.appIcon}
            ></Image>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => this.props.navigation.navigate('InputScreen')}>
            <Text style={styles.searchText}>Continue</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3.2,
    backgroundColor : 'pink',
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },

  appIcon: {
    resizeMode: "contain",
    height:500,
    width:500,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:550,
    borderRadius:15,
    borderColor:"white",
  },
  searchButton: {
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:350,
    marginTop:30,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor:'yellow',
  },
  searchText:{
    fontSize: 20,
    fontWeight: 'bold'
  },
});