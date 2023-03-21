import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,Image,ScrollView,TouchableOpacity, Platform, StatusBar, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from './database1';
import {RFValue} from 'react-native-responsive-fontsize';

export default class InputScreen extends React.Component {
 constructor() {
      super( );
      this.state = {
      text: '',
      isSearchPressed: false,
      isLoading: false,
      name : "loading...",
      category :'',
      matter : "",
      simpleDiagnosis : ""

    };
  }
 getName=(text)=>{
   var text = text.toLowerCase();
   console.log(dictionary)
   try{
     var name=dictionary[text]["name"]
     var category=dictionary[text]["category"]
     var matter=dictionary[text]["matter"]
     var simpleDiagnosis=dictionary[text]["simpleDiagnosis"]
     this.setState({
       "name":name,
       "category":category,
       "matter":matter,
       "simpleDiagnosis":simpleDiagnosis
     })
   }
   catch(err){
     alert("Sorry the database doesn't have this Information")
     this.setState({
       'text':'',
       'isSearchedPressed':false
     })
   }
  }
   render(){
    return(
      <View style={styles.container}>
        <Header
          source={require("./assets/icon.png")}
          style={styles.iconImage}
          backgroundColor={'#410e93'}
          centerComponent={{
            text: 'Dr.Med',
            style: { color: 'white', fontSize: 20 },
          }}
        />
          <ScrollView>
         <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.inputBoxContainer}>
        
          <TextInput
            style={styles.inputBox}
            onChangeText={text => {
              this.setState({
                text: text,
                isSearchPressed: false,
                name : "Loading...",
                category :'',
                examples : [],
                matter: "",
                simpleDiagnosis:""
              });
            }}
            value={this.state.text}
          />

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.setState({ isSearchPressed: true });
              this.getName(this.state.text)
            }}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.outputContainer}>
          <Text style={{fontSize:20}}>
            {
              this.state.isSearchPressed && this.state.name === "Loading..."
              ? this.state.name
              : ""
            }
          </Text>
            {
              this.state.name !== "Loading..." ?
              (
                <View style={{justifyContent:'center', marginLeft:10 }}>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>
                      Name :{" "}
                    </Text>
                    <Text style={{fontSize:18 }}>
                      {this.state.name}
                    </Text>
                  </View>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>
                      Category :{" "}
                    </Text>
                    <Text style={{fontSize:18}}>
                      {this.state.category}
                    </Text>
                  </View>
                  <View style={{flexDirection:'row',flexWrap: 'wrap'}}>
                    <Text style={styles.detailsTitle}>
                      Matter :{" "}
                    </Text>
                    <Text style={{ fontSize:18}}>
                      {this.state.matter}
                    </Text>
                  </View>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.simpleDiagnosis}>
                      simpleDiagnosis:{"  "}
                    </Text>
                    <Text style={{fontSize:18}}>
                      {this.state.simpleDiagnosis}
                    </Text>
                    
              </View>
              <Text style={{marginTop:20,marginLeft:35,marginRight:10}}>
                Note-: Even after checking this info,
              </Text>
              <Text style={{marginBottom:30,marginRight:10,marginLeft:35}}>
              please consult your doctor about the same also.
              </Text>
                </View>
    
              )
              :null
            }
             
        </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(300, 100%, 35%)',
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  inputBoxContainer: {
    flex:0.3,
    alignItems:'center',
    justifyContent:'center'
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
 inputBox: {
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    marginBottom:20,
    borderBottomColor:'blue',
    borderTopColor:'red',
    borderLeftColor:'yellow',
    borderRightColor:'yellow',
    backgroundColor:'white'
  },
  searchButton: {
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor:'yellow',
  },
  searchText:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  outputContainer:{
    flex:0.7,
    alignItems:'center',
  },
  detailsContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:25,
    marginRight:15,
  },
  detailsTitle:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    marginLeft:60,
    marginRight:10,
  },
  simpleDiagnosis:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    marginTop:20,
    marginBottom:30,
    marginLeft:60,
    marginRight:40,
  }
});