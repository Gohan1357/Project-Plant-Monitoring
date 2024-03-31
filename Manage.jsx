import React from 'react';
import { StyleSheet, View, Button, Text, Pressable, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Manage = () => {

  const navigation = useNavigation();
  const navigateToAddPage = () => {
    navigation.navigate('Addplant');
  };
  const navigateToStatusScreen = (title) => {
    navigation.navigate("StatusScreen", { title });
  };

return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={navigateToAddPage}>
            <MaterialIcons name="add" size={32} color="black" />
          </TouchableOpacity>
      <Text style={styles.title}>Manage your plants</Text>
      <View style={styles.buttoncontainer}>
      <Button
       title="Snake plant"
       onPress={() => navigateToStatusScreen("Snake plant")} // Pass title
       color="#46E238"
      />

      <Button
        title="Aloe vera"
        onPress={() => navigateToStatusScreen("Aloe vera")} // Pass title
        color="#46E238"
      />
       
     
      <Button
        title="Money plant"
        onPress={() => navigateToStatusScreen("Money plant")} // Pass title
        color="#46E238"
      />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    marginBottom:10,

  },
  addButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  buttoncontainer:{
gap:20,
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1, 
  },
});

export default Manage;