import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'
import Home from '../screens/Home'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import THEME from '../assets/styles/theme'
import Settings from '../screens/Settings'

const Tab = createMaterialBottomTabNavigator()

export default function RootLayout() {
  const insets = useSafeAreaInsets()

  return (
    <Tab.Navigator
      initialRouteName='Home'
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: THEME.BG,
      }}
      inactiveColor={THEME.TC}
      activeColor={THEME.TC}
      activeIndicatorStyle={{backgroundColor: THEME.LA}}
      barStyle={{ backgroundColor: THEME.PL }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: () => <Icon name='home' size={24} color={THEME.TC} />,
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarIcon: () => <Icon name='cog' size={24} color={THEME.TC} />,
        }}
      />
    </Tab.Navigator>
  )
}
