import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, TouchableOpacity } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';


const AsyncStorageData = () => {

    useEffect(() => {
        getStoredData();
    }, []);



    const data1 = [
        { name: 'Ajay', salary: 20000 },
        { name: 'durga', salary: 30000 },
        { name: 'venu', salary: 50000 },
        { name: 'shankar', salary: 60000 },
        { name: 'surya', salary: 70000 },
        { name: 'puli', salary: 80000 },
        { name: 'ram', salary: 90000 }
    ]

    // const mappedData = data1.map((item) => {
       
    //     return (

    //         <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
    //             <Text style={{ fontSize: 40, fontWeight: 'bold', textAlignVertical: 'center' }}>{item.name}{item.salary}</Text>
    //         </View>
    //     );


    // })

    const filteredData =data1.filter((item)=>{
        {item.salary > 6000 ?
           (
            <Text>{item.name}</Text>
           ) : null
        }

    })


    const [Data, setData] = useState('')
    const getStoredData = async () => {
        const storedValue1 = await AsyncStorage.getItem('name')
        setData(storedValue1);


    }

    return (
        <ScrollView style={{ backgroundColor: 'orange', flex: 1 }}>
            <Text>{Data}</Text>

            <Text >{filteredData}</Text>

        </ScrollView>
    )

}


export default AsyncStorageData;