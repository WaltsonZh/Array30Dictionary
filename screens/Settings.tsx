import { StyleSheet, Text, View } from 'react-native'
import THEME from '../assets/styles/theme'

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BG,
  },
  text: {
    color: THEME.TC,
  },
})
