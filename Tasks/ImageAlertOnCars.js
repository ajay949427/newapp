import React,{useState} from "react";
import{ View,
  TouchableOpacity,
  FlatList,
  Alert,
   Text,
    StyleSheet,
   Image ,
  Modal  } from'react-native'
import Audi from './assets/Audi.jpg'
import Benz from './assets/Benz.jpg'
import BMW from './assets/bmw.jpg'
import Swift from './assets/swift.jpg'
import TATA from './assets/Tata.jpg'





function App() {
  const [modalVisibile, setModalVisible] = useState(false);
  const [selectedCar, setSelectedCar] = useState({});

  const openModal = (car) => {
    setSelectedCar(car);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const showAlert = () => {
    Alert.alert(
      'Button Clicked',
      'You clicked ',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') },
      {text: 'cancel', onPress: () => console.log('cancel Pressed')}
    ]
    );
  };

  const data = [
    { name: 'Audi', Price: 35000, Year: 2015, Image: Audi },
    { name: 'Benz', Price: 55000, Year: 2012, Image: Benz },
    { name: 'BMW', Price: 45000, Year: 2011, Image: BMW },
    { name: 'Swift', Price: 39000, Year: 2017, Image: Swift },
    { name: 'TATA', Price: 135000, Year: 2010, Image: TATA },
  ];
const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openModal(item,)}>
      <View style={styles.itemContainer}>
        <Image
          source={item.Image}
          resizeMode="contain"
          style={{ width: 150, height: 150 }}
        />
        <Text style={styles.textColor}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibile}
        onRequestClose={closeModal}
      >
        
        <View style={styles.modalContainer}>
          <Image source={selectedCar.Image}/>
          <Text style={styles.modalText}>Name: {selectedCar.name}</Text>
          <Text style={styles.modalText}>Year: {selectedCar.Year}</Text>
          <Text style={styles.modalText}>Price: {selectedCar.Price}</Text>
        
          <TouchableOpacity onPress={closeModal} style={styles.backButton}>
            <Text style={styles.backButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}




 const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 5,
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 20,
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
 backButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    //alignSelf: 'center',
    marginRight: 30
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
    
  },
  okButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },



});

export default App;