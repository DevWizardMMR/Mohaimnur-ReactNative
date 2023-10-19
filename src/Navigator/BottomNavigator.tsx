import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import About from "../About/About";
import { House, Cards, User } from "phosphor-react-native";

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 20,
            right: 20,
            left: 20,
            borderRadius: 10,
            height: 70,
            elevation: 5,
            shadowColor: 'black',
            shadowOffset: { width: 5, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 3,
          },
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <House size={focused ? 25 : 20} color="black" weight="thin" />
            ),
          }}
        />
        <Tab.Screen
          name="blog"
          component={Blog}
          options={{
            tabBarIcon: ({ focused }) => (
              <Cards size={focused ? 25 : 20} color="black" weight="thin" />
            ),
          }}
        />
        <Tab.Screen
          name="about"
          component={About}
          options={{
            tabBarIcon: ({ focused }) => (
              <User size={focused ? 25 : 20} color="black" weight="thin" />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigator;
