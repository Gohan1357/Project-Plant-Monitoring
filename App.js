import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Firstpage from './components/Firstpage';
import Manage from './components/Manage';
import Addplant from './components/Addplant';
import Setplant from './components/Setplant';
import AccountScreen from './screens/AccountScreen';
import LineChartView from './components/LineChartView';
import StatusScreen from './components/StatusScreen';

const Stack = createNativeStackNavigator();

const App = ()=> {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Firstpage"
        component={Firstpage}
        options={{title:'Plantech'}}
        />
        <Stack.Screen
        name='Manage'
        component={Manage}
        options={{title:'Plantech'}}
        />
        <Stack.Screen
        name='Addplant'
        component={Addplant}
        options={{title:'Plantech'}}
        />
        <Stack.Screen
        name='Setplant'
        component={Setplant}
        options={{title:'Plantech'}}
        />
        <Stack.Screen
        name='AccountScreen'
        component={AccountScreen}
        options={{title:'Plantech'}}
        />
        <Stack.Screen
        name='LineChartView'
        component={LineChartView}
        options={{title:'Plantech'}}
        />
        <Stack.Screen
        name='StatusScreen'
        component={StatusScreen}
        options={{title:'Plantech'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;
