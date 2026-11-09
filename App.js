import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Ristorante Genoa' }}
        />

        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ title: 'Vår meny' }}
        />

        <Stack.Screen
          name="MealDetails"
          component={MealDetailsScreen}
          options={{ title: 'Om rätten' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}