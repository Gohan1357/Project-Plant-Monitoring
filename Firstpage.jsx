import {ImageBackground, StyleSheet, Text,TouchableOpacity, View, } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';


// const Drawer = createDrawerNavigator();

const Firstpage = () => {

    const image = { uri: 'https://i.pinimg.com/564x/86/1e/ce/861ecee3ef660f021376627fe5b9ec0a.jpg' };
  
    const navigation = useNavigation();
    const navigateToAnotherPage = () => {
      navigation.navigate('Manage');
    };


    const navigateToAccountPage = () => {
      navigation.navigate('AccountScreen');
    };
    
    return (
      <View style={styles.container1}>
        <View style={styles.scrollview}>
          <ImageBackground source={image} resizeMode="cover" style={styles.imageone}>
            <TouchableOpacity style={styles.icon1Container} onPress={navigateToAnotherPage}>
              <MaterialIcons name="add-task" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon2Container} onPress={navigateToAccountPage}>
            <MaterialCommunityIcons name="account-circle" size={32} color="white" />
            </TouchableOpacity>
            <Text style={styles.text}>Welcome to Green World!</Text>
            <Text style={styles.text1}>
            Unlock the secrets of thriving plants with real-time updates on vital stats. History reveals growth patterns, while alerts stand guard against threats. Take command from anywhere, shaping a flourishing kingdom. Join us in the botanical adventure of a lifetime!, Let's grow together!</Text>
          </ImageBackground>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({

    container1: {
      flex: 1,
    },
    imageone: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    text: {
      margin: 10,
      fontSize: 22,
      fontWeight:"bold",
      color:"black",
      textShadowColor: 'white', // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset
    textShadowRadius: 12, // Shadow blur radius
    },
    text1: {
      margin: 10,
      fontSize: 18,
      color:"#254117",
      fontWeight:"300",
      backgroundColor:"#8FBC8F",
    },
    scrollview: {
      flex: 1,
    },
    icon1Container: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 1,
    },
    icon2Container: {
      position: 'absolute',
      top: 10,
      left: 10,
      zIndex: 1,
    },
  });

export default Firstpage;

