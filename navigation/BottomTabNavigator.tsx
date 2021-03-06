import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import PostScreen from '../screens/PostScreen';
import ProfileScreen from '../screens/PostScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import UserListScreen from "../screens/UserListScreen";
import UserList from "../screens/UserList";
import Posts from "../screens/Posts";
import Albums from "../screens/Albums";
import comments from "../screens/comments";
import Photos from "../screens/Photos";
import Todos from "../screens/Todos";
import UserList1Screen from "../screens/UserList1Screen";
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator initialRouteName={"UserListScreen"}>
      <TabOneStack.Screen name="TabOneScreen" component={TabOneScreen} options={{ headerTitle: 'Tab One Title' }} />
      <TabOneStack.Screen name="PostSc" component={PostScreen} options={{ headerTitle: 'post screen' }} />
      <TabOneStack.Screen name="UserListScreen" component={UserListScreen} options={{ headerTitle: 'user list' }} />
      <TabOneStack.Screen name="UserList1Screen" component={UserList1Screen} options={{ headerTitle: 'id list' }} />
      <TabOneStack.Screen name="UserList" component={UserList} options={{ headerTitle: 'user screen' }} />
      <TabOneStack.Screen name="Posts" component={Posts} options={{ headerTitle: 'posts' }} />
      <TabOneStack.Screen name="Albums" component={Albums} options={{ headerTitle: 'albums' }} />
      <TabOneStack.Screen name="Photos" component={Photos} options={{ headerTitle: 'photos' }} />
      <TabOneStack.Screen name="Todos" component={Todos} options={{ headerTitle: 'todos' }} />
      <TabOneStack.Screen name="comments" component={comments} options={{ headerTitle: 'comments' }} />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen name="TabTwoScreen"component={TabTwoScreen} options={{ headerTitle: 'Tab Two Title'}} />
      <TabTwoStack.Screen name="Prfsc"component={ProfileScreen} options={{ headerTitle: 'Profile Screen'}} />
    </TabTwoStack.Navigator>
  );
}
