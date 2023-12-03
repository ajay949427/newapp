import React ,{useState}from "react";
import { Button, Text, View,TouchableOpacity} from "react-native";
import DummyApiCalling from "./DummyApiCalling";
import AsyncStorageData from "./AsyncStorageData";





const Login = ({ navigation }) => {


  const Btn1 = () => {
    console.log('Clicked on Goto  API')
    navigation.navigate('DummyApiCallingScreen')

    //navigation.goBack('HomeScreen');
  }
  
  
  
  

  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>
      <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'orange' }}>Login Screen</Text>
      <Button title="Go to Api" onPress={Btn1}></Button>

      
    </View>
     
    
  );
  }

export default Login;
