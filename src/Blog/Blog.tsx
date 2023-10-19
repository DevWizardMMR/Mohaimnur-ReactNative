import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllBlog from "./AllBlog";
import OwnBlog from "./OwnBlog";

const Tab = createMaterialTopTabNavigator();

const Blog = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="AllBlog"
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: "white" },
        }}
      >
        <Tab.Screen
          name="PersonalBlog"
          component={OwnBlog}
          options={{ tabBarLabel: "Personal Blog" }}
        />
        <Tab.Screen
          name="AllBlog"
          component={AllBlog}
          options={{ tabBarLabel: "All Blog" }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Blog;
