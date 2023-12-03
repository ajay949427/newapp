import React from 'react';
import { View, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

const App = () => {
  
   const countries=['Country1','Country2','Couuntry3']
  
  return(
    <View style={styles.container}>
    <SelectDropdown
      data={countries}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem; // Text represented after the item is selected
      }}
      rowTextForSelection={(item, index) => {
        return item; // Text represented for each item in the dropdown
      }}
    />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'yellow'
  },
});


export default App;
