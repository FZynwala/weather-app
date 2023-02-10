import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import CurrentScreen from './src/screens/CurrentScreen';
import ForecastScreen from './src/screens/ForecastScreen';
import { store } from './src/store';
import { listColor } from './src/utils';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator
                    style={{ backgroundColor: '#444d60' }}
                    barStyle={{ height: 70, backgroundColor: '#444d60' }}
                    activeColor={'#ffffff'}
                    inactiveColor={'#ffffff'}
                    initialRouteName={'Current'}
                >
                    <Tab.Screen
                        name="Current"
                        component={CurrentScreen}
                        options={{
                            tabBarLabel: 'Current',
                            tabBarBadge: false,
                            tabBarColor: 'white',
                            tabBarIcon: (tabInfo) => (
                                <MaterialIcons name="today" size={24} color={tabInfo.focused ? '#444d60' : listColor} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Forecast"
                        component={ForecastScreen}
                        options={{
                            tabBarLabel: 'Forecast',
                            tabBarBadge: false,
                            tabBarColor: 'white',
                            tabBarIcon: (tabInfo) => (
                                <MaterialCommunityIcons
                                    name="weather-cloudy-clock"
                                    size={24}
                                    color={tabInfo.focused ? '#444d60' : listColor}
                                />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;

// const TabNavigator = createMaterialBottomTabNavigator(
//     {
//         Current: {
//             screen: CurrentScreen,
//             navigationOptions: {
//                 tabBarLabel: 'Current',
//                 tabBarIcon: () => <MaterialIcons name="today" size={24} color="white" />,
//             },
//         },
//         Forecast: {
//             screen: ForecastScreen,
//             navigationOptions: {
//                 tabBarLabel: 'Forecast',
//                 tabBarIcon: () => (
//                     <MaterialCommunityIcons
//                         style={{ alignSelf: 'flex-start' }}
//                         name="weather-cloudy-clock"
//                         size={25}
//                         color="white"
//                     />
//                 ),
//             },
//         },
//     },
//     {
//         initialRouteName: 'Current',
//         barStyle: { backgroundColor: '#444d60' },
//         activeColor: 'white',
//         inactiveColor: '#f7f1e3',
//     },
// );

// const App = createAppContainer(TabNavigator);

// export default () => {
//     return (
//         <Provider store={store}>
//             <SafeAreaProvider>
//                 <App />
//             </SafeAreaProvider>
//         </Provider>
//     );
// };
