import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const App = () => {
  const [isButton1Clicked, setButton1Clicked] = useState(false);
  const [isButton2Clicked, setButton2Clicked] = useState(false);

  const onButton1Press = () => {
    setButton1Clicked(!isButton1Clicked);
    setButton2Clicked(false);
  };

  const onButton2Press = () => {
    setButton1Clicked(false);
    setButton2Clicked(!isButton2Clicked);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.halfScreen, { backgroundColor: isButton1Clicked ? 'red' : 'white' }]}
        onPress={onButton1Press}
      >
        <Text>Switch On</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.halfScreen, { backgroundColor: isButton2Clicked ? 'green' : 'white' }]}
        onPress={onButton2Press}
      >
        <Text>Switch Off</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  halfScreen: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});

export default App;
