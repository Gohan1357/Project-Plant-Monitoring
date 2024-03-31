import { StyleSheet, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { LineChart } from "react-native-chart-kit";

const LineChartView = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  const Data = props.Data;
  const legend = props.legend;
  console.log("Line Chart: ", Data);
  console.log(legend);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      //console.log("Refreshing the content");
    }, 1000);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      onRefresh();
    }, 2000); // Run onRefresh every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [onRefresh]);

  const chartConfig = () => ({
    backgroundGradientFrom: "#f9f9f9",
    backgroundGradientTo: "#f9f9f9",

    color: (opacity = 1) => {
      const value = Data && Data.length > 0 ? Data[Data.length - 1] : 0;
      console.log(value);
      // Assuming you want to base color on the last data point
      return value < props.threshold
        ? `rgba(250, 0, 0, ${opacity})` //+ console.log("------Red-Colour------") // Red color if value is less than 40
        : `rgba(0, 250, 0, ${opacity})`; //+console.log("------Green-Colour------"); // Green color otherwise
    },

    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  });

  //console.log(generateGMTLabels_H_M());

  const generateGMTLabels = () => {
    const labels = [];
    const now = new Date(); // Current GMT time
    const offset = now.getTimezoneOffset(); // Timezone offset in minutes

    // Loop to generate labels for 6 minutes ago to now
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 60 * 1000 - offset * 60 * 1000); // Calculate GMT time
      const second = date.getUTCSeconds().toString().padStart(2, "0"); // Seconds (0-59)
      const millisecond = date
        .getUTCMilliseconds()
        .toString()
        .padStart(2, "0")
        .slice(0, 2); // Milliseconds (0-99) // Milliseconds (0-999)
      labels.push(`${second}:${millisecond}`); // Format minutes, seconds, and milliseconds
    }

    return labels;
  };

  //console.log(generateGMTLabels());

  const labels = generateGMTLabels();

  const generateChartData = () => ({
    labels: labels,
    datasets: [
      {
        data: Data,
      },
    ],
    legend: [legend], // Pass the legend as a prop
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LineChart
          data={generateChartData()}
          width={336}
          height={260}
          yAxisSuffix="°C"
          verticalLabelRotation={30}
          chartConfig={chartConfig()}
          style={{ borderWidth: 1, borderRadius: 6 }}
          bezier
        />
      </View>
    </ScrollView>
  );
};

export default LineChartView;

const styles = StyleSheet.create({});
