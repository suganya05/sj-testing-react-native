import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../../../styles/theme'
import MidLevelIcon from '../../../assets/icons/MidLevelIcon'
import PremiumIcon from '../../../assets/icons/PremiumIcon'
import AccountIcon from '../../../assets/icons/AccountIcon'
import Post from './Post'
import MidLevel from './MidLevel'
import Premium from './Premium'
import Account from './Account'
import TabHomeIcon from '../../../assets/icons/TabHomeIcon'
import PremiumNavigation from '../StackNavigation/Premium'

const Tab = createBottomTabNavigator()

const TabNavigationRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.textClr,
          paddingVertical: 16,
          borderTopWidth: 0,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name='Post'
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <View style={{ backgroundColor: 'white', borderRadius: 50 }}>
                <TabHomeIcon color={color} width={40} height={40} />
              </View>
            ) : (
              <TabHomeIcon color={color} width={40} height={40} />
            ),
          headerShown: false,
        }}
        component={Post}
      />
      <Tab.Screen
        name='MidLevel'
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <View style={{ backgroundColor: 'white', borderRadius: 50 }}>
                <MidLevelIcon color={color} width={40} height={40} />
              </View>
            ) : (
              <MidLevelIcon color={color} width={40} height={40} />
            ),
          headerShown: false,
        }}
        component={MidLevel}
      />
      <Tab.Screen
        name='Premium'
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <View style={{ backgroundColor: 'white', borderRadius: 50 }}>
                <PremiumIcon color={color} width={40} height={40} />
              </View>
            ) : (
              <PremiumIcon color={color} width={40} height={40} />
            ),
          headerShown: false,
        }}
        component={Premium}
      />
      <Tab.Screen
        name='Account'
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <View style={{ backgroundColor: 'white', borderRadius: 50 }}>
                <AccountIcon color={color} width={40} height={40} />
              </View>
            ) : (
              <AccountIcon color={color} width={40} height={40} />
            ),
          headerShown: false,
        }}
        component={Account}
      />
    </Tab.Navigator>
  )
}

export default TabNavigationRoutes
