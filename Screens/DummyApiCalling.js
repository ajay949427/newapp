import React, { useState ,useEffect} from "react";
import { View, FlatList, Text, TouchableOpacity, Image,Button } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const DummyApiCalling = ({navigation}) => {

// compound willMount
   useEffect(()=>{
    getApI1()
    
  },[]);




  
   
     const GotoAsyncBtn = () => {
     navigation.navigate('AsyncStorageDataScreen')

     }

const navigateToCuponCode =(names) => {

  navigation.navigate("CuponCodeScreen",{title:names})
}

  
  const Btn2 = () => {
    navigation.navigate('HomeScreen')
    console.log('pressed Go To Home')
  }

  const [getUserApi, setUserApi] = useState([]);

  const getApI1 = async () => {
    console.log('test pressed')
    const respond = await axios('https://dummyjson.com/users');
    console.log('resp>>>>>:', respond.data.users);
    setUserApi(respond.data.users)

    const setApiData=JSON.stringify(respond.data)
    const  storedValue=await AsyncStorage.setItem('name',setApiData)

  }
  const renderItem = ({ item, index }) => {

    const colors = ['red', 'green', 'yellow', 'blue', 'orange', 'pink', 'skyblue', 'grey',]
    const backgroundColor = colors[index % colors.length]
    return (


      <View
        style={{

          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          padding: 50,
          margin: 5,
          borderRadius: 30,
          marginTop: 50,
          backgroundColor,
          marginVertical: 10,
          justifyContent: 'space-between',

        }}
      >
        <View style={{ marginRight: 'auto', alignItems: 'flex-start', marginTop: 10 }}>
          <Text
            style={{
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: 15,
              color: 'black',
            }}>
            {item.firstName}
          </Text>
          <Text
            style={{
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: 15,
              color: 'black',
            }}
          >
            {item.lastName}
          </Text>
          <Text
            style={{
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: 15,
              color: 'black',
            }}
          >
            {item.ein}
          </Text>
          <TouchableOpacity
          onPress= {()=> navigateToCuponCode(item.names)}

          
          >
          <Text 
            style={{
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: 16,
              color: 'black',
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: 'gray',
              padding: 3,
              borderRadius: 5,
            }}
          >
            {item.password}
          </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginLeft: 'auto' }}>
          <Image
            style={{
              width: 100,
              height: 120,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            source={{ uri: item.image }}
          />
        </View>
        <View style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
          <Text
            style={{
              textAlign: 'right',
              fontWeight: 'bold',
              fontSize: 15,
              color: 'black',
            }}
          >
            {item.bank.cardType}
          </Text>
          <Text
            style={{
              textAlign: 'right',
              fontWeight: 'bold',
              fontSize: 15,
              color: 'black',
            }}>
            {item.address.city}
          </Text>
          <Text
            style={{
              textAlign: 'right',
              fontWeight: 'bold',
              fontSize: 15,
              color: 'black',
            }}>
            {item.company.department}
          </Text>
          <Text
            style={{
              textAlign: 'right',
              fontWeight: 'bold',
              fontSize: 15,
              color: 'black',
            }}>
            {item.address.postalCode}
          </Text>
        </View>
       
      </View>
    )

  }

  return (

    <View
      style={{
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
      }}>
      <FlatList
        horizontal
        data={getUserApi}
        // keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      // contentContainerStyle={{ paddingHorizontal: 20 }}
      />
      <TouchableOpacity
        style={{
          borderRadius: 6,
          borderWidth: 3,
          backgroundColor: 'lightgrey',
          margin: 50,
          alignSelf: 'center',
        }}
        onPress={getApI1}>
        <Text
          style={{
            color: 'red',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            margin: 1,
          }}>
          Goto Data
        </Text>
      </TouchableOpacity>
      <View>

        <TouchableOpacity
          style={{
            color: 'green',
            borderRadius: 10,
            borderWidth: 5,
            backgroundColor: 'yellow',
            margin: 50,
            alignSelf: 'center',
          }}
          onPress={Btn2}
        >
          <Text
            style={{
              color: 'green',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              margin: 1,
            }}
          >GoTo Home</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Button title='goTo Async' onPress={GotoAsyncBtn}></Button>
      </View>

    </View>

  );




}
export default DummyApiCalling;