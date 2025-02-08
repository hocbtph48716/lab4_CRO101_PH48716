import 'react-native-reanimated';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import B1 from './b1';
import B2 from './b2';
import B3 from './b3';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function RootLayout() {
  return(

    <Drawer.Navigator 
    initialRouteName="Bài 1">
      <Drawer.Screen name="Bài 1" component={B1} />
      <Drawer.Screen name="Bài 2" component={B2} />
      <Drawer.Screen name="Bài 3" component={B3} />
    </Drawer.Navigator>
  );
}