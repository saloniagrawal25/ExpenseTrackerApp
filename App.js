import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import ManageExpenses from './screens/ManageExpenses';

const App = () => {
  const Stack = createNativeStackNavigator();
  const BottomTab = createBottomTabNavigator();

  const ExpensesOverview = () => {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen name="RecentExpenses" component={RecentExpenses} />
        <BottomTab.Screen name="AllExpenses" component={AllExpenses} />
      </BottomTab.Navigator>
    );
  };

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{headerShown: false}}
          />
          <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
