// import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { Checkbox} from 'react-native-paper';

const Setplant = ({ route }) => {
  const { plantName } = route.params;
  const [airTemperature, setAirTemperature] = useState(1);
  const [airHumidity, setAirHumidity] = useState(1);
  const [soilMoistureIndex, setSoilMoistureIndex] = useState(0); // State for managing soil moisture option

  return (
    <View style={styles.container}>
      <Text style={styles.addANew}>Add a new plant: {plantName}</Text>

      <View style={styles.optimalParentLayout}>
        <Text style={styles.optimalAirTemperature}>Optimal air Temperature</Text>
        <TextInput
        style={styles.searchInput}
        placeholder="Enter air temperature"
        keyboardType="numeric"
        ></TextInput>
        {/* <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={100}
            value={airTemperature}
            onValueChange={setAirTemperature}
            step={1}
            thumbTintColor="#46E238"
            thumbStyle={{ height: 20, width: 20 }}
            thumbTouchSize={{ width: 40, height: 40 }}
          />
          <Text style={styles.sliderValue}>{airTemperature}</Text>
        </View> */}
      </View>

      <View style={styles.optimalParentLayout}>
        <Text style={styles.optimalAirTemperature}>Optimal air Humidity</Text>
        <TextInput
        style={styles.searchInput}
        placeholder="Enter air humidity"
        keyboardType="numeric"
        ></TextInput>
        {/* <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={100}
            value={airHumidity}
            onValueChange={setAirHumidity}
            step={1}
            thumbTintColor="#46E238"
            thumbStyle={{ height: 20, width: 20 }}
            thumbTouchSize={{ width: 40, height: 40 }}
          />
          <Text style={styles.sliderValue}>{airHumidity}</Text>
        </View> */}
      </View>

      <Text style={styles.optimalSoilMoisture}>Optimal soil moisture</Text>
      <View style={styles.checkcontainer}>
        <Checkbox.Item
          label="Keep soil mix moist."
          status={soilMoistureIndex === 0 ? 'checked' : 'unchecked'}
          onPress={() => setSoilMoistureIndex(0)}
          color="black"
        />
        <Checkbox.Item
          label="Surface of soil mix should dry before re-watering."
          status={soilMoistureIndex === 1 ? 'checked' : 'unchecked'}
          onPress={() => setSoilMoistureIndex(1)}
          color="black"
        />
        <Checkbox.Item
          label="Soil mix can become moderately dry before re-watering."
          status={soilMoistureIndex === 2 ? 'checked' : 'unchecked'}
          onPress={() => setSoilMoistureIndex(2)}
          color="black"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Cancel" color="#46E238" onPress={() => {}} />
        <Button title="Ok" color="#46E238" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  addANew: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  optimalParentLayout: {
    marginBottom: 20,
  },
  optimalAirTemperature: {
    fontWeight: 'bold',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slider: {
    flex: 1,
    marginVertical: 10,
  },
  sliderValue: {
    marginLeft: 10,
  },
  optimalSoilMoisture: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkcontainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:'center',
    gap:80
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,

  },
});

export default Setplant;
