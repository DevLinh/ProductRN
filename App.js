import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './components/Home';
import Detail from './components/Detail'
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: 'Cửa hàng sách' }}/>
          <Stack.Screen name="Detail" component={Detail} options= {{title: 'Chi tiết'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
