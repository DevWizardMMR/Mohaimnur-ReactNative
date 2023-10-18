import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/Home/Home';
import About from './src/About/About';
import Blog from './src/Blog/Blog';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="about" component={About} />
          <Stack.Screen name="blog" component={Blog} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
