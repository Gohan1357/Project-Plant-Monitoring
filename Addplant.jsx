import React, { useState} from 'react';
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Addplant = () => {

    const [plantName, setPlantName] = useState('');
    const navigation = useNavigation();
    const goToNextPage = () => { 
      navigation.navigate('Setplant', { plantName }); 
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter the plant name</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter plant name"
          value={plantName}
          onChangeText={text => setPlantName(text)} 
        />
        <View style={styles.buttoncontainer}>
            <Button onPress={goToNextPage} title='Next' color="#46E238"/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,

  },
  title: {
    textAlign: 'center',
    fontSize: 18,

    marginTop: 10,
  },
  buttoncontainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

});
export default Addplant;