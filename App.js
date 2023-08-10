import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './app/screens/ProductList/ProductList';
import ProductDetails from './app/screens/ProductDetails/ProductDetails';
import { View, Image } from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}

export default App;
