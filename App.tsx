import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper'
import RootLayout from './Layouts/RootLayout'
import { AppRegistry } from 'react-native'
import { expo } from './app.json'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <StatusBar style='auto' />
          <RootLayout />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  )
}

AppRegistry.registerComponent(expo.name, () => App)
