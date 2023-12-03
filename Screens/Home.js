import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import axios from "axios";


const Home = ({ navigation }) => {
  // const [apiData, setApiData] = useState([]);

  const loginBtn = () => {
    console.log("pressed on GoTo LOgin");
    navigation.navigate("Loginscreen");
   
  };
  



  return (
    <View style={{ flex: 1, backgroundColor: "yellow" }}>
      {/* <FlatList
        data={apiData}
        renderItem={renderItem}
      /> */}

      <Text style={{ textAlign: "center" }}>Home Screen</Text>
      <Button title=" go to login" onPress={loginBtn} />
      
    
    </View>
  );
};

export default Home;
