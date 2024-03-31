import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import LineChartView from './LineChartView';

const StatusScreen = ({route}) => {
  const { title } = route.params;
  const [temperatureData, setTemperatureData] = useState(
    generateRandomData(6, 0, 100)
  );
  const [humidityData, setHumidityData] = useState(
    generateRandomData(6, 0, 100)
  );
  const [moistureData, setMoistureData] = useState(
    generateRandomData(6, 0, 100)
  );
  const temperatureValue=30
  const humidityValue=30
  const moistureValue=30


  useEffect(() => {
    const intervalId = setInterval(() => {
      setTemperatureData(generateRandomData(6, 0, 100));
      setHumidityData(generateRandomData(6, 0, 100));
      setMoistureData(generateRandomData(6, 0, 100));
    }, 2000); // Update data every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // const [temperatureData, setTemperatureData] = useState([]);
  // const [humidityData, setHumidityData] = useState([]);
  // const [moistureData, setMoistureData] = useState([]);

  {
    /*useEffect(() => {
    const fetchData = async () => {
      try {
        const [temperatureResponse, humidityResponse, moistureResponse] =
          await Promise.all([
            fetch("http://192.168.0.104:5000/temperature"),
            fetch("http://192.168.0.104:5000/humidity"),
            fetch("http://192.168.0.104:5000/moisture"),
          ]);

        if (
          !temperatureResponse.ok ||
          !humidityResponse.ok ||
          !moistureResponse.ok
        ) {
          throw new Error("Failed to fetch data");
        }

        const temperatureJson = await temperatureResponse.json();
        const humidityJson = await humidityResponse.json();
        const moistureJson = await moistureResponse.json();

        setTemperatureData(temperatureJson);
        setHumidityData(humidityJson);
        setMoistureData(moistureJson);
      } catch (error) {
        console.error("Error fetching data:", error);
        Alert.alert("Error", `Failed to fetch data: ${error.message}`);
      }
    };

    const intervalId = setInterval(fetchData, 2000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);*/
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 6,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor:"#46E238",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
            marginLeft:3,
            marginRight:3,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "white",
              fontWeight:"600"
            }}
          >
          {title}
          </Text>
        </View>
        <LineChartView legend={"Temperature"} Data={temperatureData} threshold={temperatureValue} />
        <LineChartView legend={"Humidity"} Data={humidityData} threshold={humidityValue} />
        <LineChartView legend={"Moisture"} Data={moistureData} threshold={moistureValue} />
      </ScrollView>
    </SafeAreaView>
  );
};

const generateRandomData = (length, min, max) => {
  const data = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = (Math.random() * (max - min) + min).toFixed(2); // Round to two decimal places
    data.push(parseFloat(randomNumber)); // Convert to floating-point number
  }
  return data;
};

export default StatusScreen;
