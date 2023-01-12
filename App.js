import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import ManageExpenses from './screens/ManageExpenses';
import {GlobalStyles} from './constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expenses-context';

const App = () => {
  const Stack = createNativeStackNavigator();
  const BottomTab = createBottomTabNavigator();

  const ExpensesOverview = () => {
    return (
      <BottomTab.Navigator
        screenOptions={({navigation}) => ({
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerTintColor: 'white',
          tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
          headerRight: ({tintColor}) => (
            <IconButton
              icon="add"
              size={24}
              color={tintColor}
              onPress={() => {
                navigation.navigate('ManageExpenses');
              }}
            />
          ),
        })}>
        <BottomTab.Screen
          name="RecentExpenses"
          component={RecentExpenses}
          options={{
            title: 'Recent Expenses',
            tabBarLabel: 'Recent',
            tabBarIcon: ({color, size}) => (
              <Icon name="hourglass" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="AllExpenses"
          component={AllExpenses}
          options={{
            title: 'All Expenses',
            tabBarLabel: 'All',
            tabBarIcon: ({color, size}) => (
              <Icon name="calendar" size={size} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary500,
              },
              headerTintColor: 'white',
            }}>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ManageExpenses"
              component={ManageExpenses}
              options={{presentation: 'modal'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
};

export default App;
