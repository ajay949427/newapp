
import React from 'react';
import { View, Text } from 'react-native'


const cuponCode = ({ navigation, route }) => {



    return (
        <View style={{ backgroundColor: 'orange', }}>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'green' }}>{route.params.title}</Text>
        </View>
    )

}

export default cuponCode;