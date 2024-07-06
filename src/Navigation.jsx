import {
  StyleSheet,
  Text,
  View,
  Button,
  Settings,
  ScrollView,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
// import LaporanScreen from './screens/move/LaporanScreen';
// import SettingsScreen from './screens/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import StoryListScreen from './screens/move/StoryListScreen';
import StoryDetailScreen from './screens/StoryDetailScreen';
// import {Button} from 'react-native-paper';
import stories from './data/stories';

const Stack = createNativeStackNavigator();

// const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StoryList" component={StoryListScreen} />
        <Stack.Screen name="StoryDetail" component={StoryDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator();

// function Navigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Tab1}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen name="Profil" component={StoryDetailScreen} />
//         <Stack.Screen name="Laporan" component={StoryListScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default Navigation;

// export function Tab1() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Beranda"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <FontAwesome5 name="home" size={size} color={color} />
//           ),
//         }}
// />
{
  /* <Tab.Screen
        name="Pengaturan"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="cogs" size={size} color={color} />
          ),
        }}
      /> */
}
{
  /* <Tab.Screen
        name="Notifikasi"
        component={StoryListScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="bell" size={size} color={color} />
          ),
        }}
      /> */
}
// </Tab.Navigator>
// );
// }
